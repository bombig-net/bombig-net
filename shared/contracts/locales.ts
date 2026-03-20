export const LOCALES = ['en', 'de'] as const

export type LocaleCode = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: LocaleCode = 'de'

export const LOCALE_DEFINITIONS = [
  { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
  { code: 'de', iso: 'de-DE', file: 'de.json', name: 'Deutsch' },
] as const

export function isLocaleCode(value: string): value is LocaleCode {
  return LOCALES.includes(value as LocaleCode)
}
