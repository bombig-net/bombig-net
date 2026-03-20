import { readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()

const walk = async (directory: string): Promise<string[]> => {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(entries.map(async (entry) => {
    const resolved = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      if (['.git', '.nuxt', '.output', '.data', 'node_modules', 'dist'].includes(entry.name)) {
        return []
      }
      return walk(resolved)
    }
    return [resolved]
  }))

  return files.flat()
}

const files = await walk(root)
const vueFiles = files.filter((file) => file.endsWith('.vue'))
const cssFiles = files.filter((file) => file.endsWith('.css'))
const jsLikeFiles = files.filter((file) => /\.(ts|js|mjs|vue)$/.test(file))

const errors: string[] = []

for (const file of vueFiles) {
  const source = await readFile(file, 'utf8')
  if (source.includes('class="') || source.includes("class='")) {
    errors.push(`Raw class attribute found in ${path.relative(root, file)}`)
  }
  if (source.includes('stylex.create(')) {
    errors.push(`stylex.create must live outside Vue SFCs: ${path.relative(root, file)}`)
  }
}

for (const file of cssFiles) {
  const relative = path.relative(root, file)
  if (relative !== 'app/assets/stylex.css') {
    errors.push(`Unexpected CSS file outside StyleX entrypoint: ${relative}`)
  }
}

for (const file of jsLikeFiles) {
  if (file === path.join(root, 'scripts/validate-repo.ts')) {
    continue
  }
  const source = await readFile(file, 'utf8')
  if (source.includes('tailwind')) {
    errors.push(`Tailwind reference found in ${path.relative(root, file)}`)
  }
}

if (errors.length) {
  throw new Error(errors.join('\n'))
}

const stylexEntry = path.join(root, 'app/assets/stylex.css')
const stylexStats = await stat(stylexEntry)
if (!stylexStats.isFile()) {
  throw new Error('Missing StyleX CSS entrypoint at app/assets/stylex.css')
}

console.log('Repository validation passed.')
