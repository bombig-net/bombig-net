import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
import path from "node:path";

const targetUrl = process.argv[2] ?? process.env.VISUAL_CHECK_URL ?? "http://localhost:3000";
const slowMoMs = Number.parseInt(process.env.VISUAL_CHECK_SLOWMO ?? "0", 10);
const headless = process.env.VISUAL_CHECK_HEADLESS === "1";
const keepOpen = process.env.VISUAL_CHECK_KEEP_OPEN === "1";
const pause = process.env.VISUAL_CHECK_PAUSE === "1";

const run = async () => {
  const outDir = path.resolve(process.cwd(), "visual-snapshots");
  await fs.mkdir(outDir, { recursive: true });

  const runId = new Date().toISOString().replace(/[:.]/g, "-");
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  const browser = await chromium.launch({ headless, slowMo: slowMoMs });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
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

    const lastPng = path.join(outDir, "last.png");
    const runPng = path.join(outDir, `${runId}.png`);
    await page.screenshot({ path: lastPng, fullPage: true });
    await page.screenshot({ path: runPng, fullPage: true });

    const metadata = {
      url: targetUrl,
      timestamp: new Date().toISOString(),
      viewport: { width: 1440, height: 900 },
      consoleErrors,
      pageErrors,
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
