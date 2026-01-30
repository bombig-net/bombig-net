import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
import path from "node:path";

const targetUrl = process.argv[2] ?? process.env.VISUAL_CHECK_URL ?? "http://localhost:3000";
const slowMoMs = Number.parseInt(process.env.VISUAL_CHECK_SLOWMO ?? "0", 10);
const headlessEnv = process.env.VISUAL_CHECK_HEADLESS;
const headless = headlessEnv ? headlessEnv !== "0" : true;
const keepOpen = process.env.VISUAL_CHECK_KEEP_OPEN === "1";
const pause = process.env.VISUAL_CHECK_PAUSE === "1";
const viewportWidth = Number.parseInt(process.env.VISUAL_CHECK_WIDTH ?? "1440", 10);
const viewportHeight = Number.parseInt(process.env.VISUAL_CHECK_HEIGHT ?? "900", 10);

const run = async () => {
  const outDir = path.resolve(process.cwd(), "visual-snapshots");
  await fs.mkdir(outDir, { recursive: true });

  const runId = new Date().toISOString().replace(/[:.]/g, "-");
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  const browser = await chromium.launch({ headless, slowMo: slowMoMs });
  const context = await browser.newContext({
    viewport: { width: viewportWidth, height: viewportHeight },
  });
  const page = await context.newPage();

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });
  page.on("pageerror", (error) => {
    pageErrors.push(String(error));
  });

  try {
    await page.goto(targetUrl, { waitUntil: "networkidle" });

    const { hydrationMismatches, nuxtGlobals } = await page.evaluate(() => {
      type HydrationHint = { componentName?: string; fileLocation?: string };
      type NuxtHints = { hydration?: HydrationHint[] };
      type NuxtApp = { __hints?: NuxtHints };
      const globals = Object.keys(window).filter((key) => key.toLowerCase().includes("nuxt"));
      const appFromGlobal = (window as typeof window & { __NUXT_APP__?: NuxtApp }).__NUXT_APP__;
      const nuxt = (window as typeof window & { __NUXT__?: NuxtApp }).__NUXT__;
      const appFromComposable = typeof (window as typeof window & { useNuxtApp?: () => unknown }).useNuxtApp === "function"
        ? ((window as typeof window & { useNuxtApp?: () => unknown }).useNuxtApp?.() as NuxtApp)
        : undefined;
      const mismatches =
        appFromGlobal?.__hints?.hydration ??
        appFromComposable?.__hints?.hydration ??
        nuxt?.__hints?.hydration ??
        [];
      return {
        nuxtGlobals: globals,
        hydrationMismatches: (mismatches as HydrationHint[]).map((issue) => ({
          componentName: issue.componentName,
          fileLocation: issue.fileLocation,
        })),
      };
    });

    const lastPng = path.join(outDir, "last.png");
    const runPng = path.join(outDir, `${runId}.png`);
    await page.screenshot({ path: lastPng, fullPage: true });
    await page.screenshot({ path: runPng, fullPage: true });

    const metadata = {
      url: targetUrl,
      timestamp: new Date().toISOString(),
      viewport: { width: viewportWidth, height: viewportHeight },
      consoleErrors,
      pageErrors,
      hydrationMismatches,
      nuxtGlobals,
    };

    const lastJson = path.join(outDir, "last.json");
    const runJson = path.join(outDir, `${runId}.json`);
    await fs.writeFile(lastJson, JSON.stringify(metadata, null, 2), "utf8");
    await fs.writeFile(runJson, JSON.stringify(metadata, null, 2), "utf8");

    if (pause) {
      await page.pause();
    }
    if (keepOpen) {
      await new Promise(() => undefined);
    }
  } finally {
    if (!keepOpen) {
      await browser.close();
    }
  }
};

run().catch(async (error) => {
  console.error("visual-check failed:", error);
  process.exitCode = 1;
});
