import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

const root = process.cwd()

const extractEntryId = (source: string) => {
  const match = source.match(/entryId:\s*"([a-z0-9-]+)"/)
  return match?.[1]
}

describe('content contracts', () => {
  it('keeps blog slugs aligned across locales', async () => {
    const en = await readdir(path.join(root, 'content/en/blog'))
    const de = await readdir(path.join(root, 'content/de/blog'))
    expect([...de].sort()).toEqual([...en].sort())
  })

  it('ensures every localized content file has an entryId', async () => {
    const directories = [
      'content/en/blog',
      'content/de/blog',
      'content/en/case-studies',
      'content/de/case-studies',
    ]

    for (const directory of directories) {
      const files = await readdir(path.join(root, directory))
      for (const file of files) {
        const source = await readFile(path.join(root, directory, file), 'utf8')
        expect(extractEntryId(source)).toBeTruthy()
      }
    }
  })
})
