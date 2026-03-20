import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

const root = process.cwd()

const flatten = (value: Record<string, unknown>, prefix = ''): string[] => {
  return Object.entries(value).flatMap(([key, child]) => {
    const next = prefix ? `${prefix}.${key}` : key
    if (child && typeof child === 'object' && !Array.isArray(child)) {
      return flatten(child as Record<string, unknown>, next)
    }
    return [next]
  })
}

describe('locale contracts', () => {
  it('keeps english and german locale keys aligned', async () => {
    const en = JSON.parse(await readFile(path.join(root, 'i18n/locales/en.json'), 'utf8'))
    const de = JSON.parse(await readFile(path.join(root, 'i18n/locales/de.json'), 'utf8'))

    expect(flatten(de)).toEqual(flatten(en))
  })
})
