import { LOCALES, type LocaleCode } from './locales'
import { SERVICE_DEFINITIONS } from './services'

export const STATIC_ROUTE_DEFINITIONS = [
  { id: 'home', path: '/', navKey: 'nav.home' },
  { id: 'about', path: '/about', navKey: 'nav.about' },
  { id: 'services', path: '/services', navKey: 'nav.services' },
  { id: 'caseStudies', path: '/case-studies', navKey: 'nav.caseStudies' },
  { id: 'blog', path: '/blog', navKey: 'nav.blog' },
  { id: 'contact', path: '/contact', navKey: 'nav.contact' },
  { id: 'privacy', path: '/privacy', navKey: 'nav.privacy' },
] as const

export const SERVICE_ROUTE_DEFINITIONS = SERVICE_DEFINITIONS.map((service) => ({
  id: service.id,
  path: service.routePath,
  navKey: service.navKey,
}))

export const APP_ROUTE_DEFINITIONS = [...STATIC_ROUTE_DEFINITIONS, ...SERVICE_ROUTE_DEFINITIONS] as const

export const PRIMARY_NAVIGATION = [
  { routeId: 'home' },
  {
    routeId: 'services',
    children: SERVICE_ROUTE_DEFINITIONS.map((service) => ({ routeId: service.id })),
  },
  { routeId: 'caseStudies' },
  { routeId: 'about' },
] as const

export const FOOTER_NAVIGATION = [
  'services',
  'caseStudies',
  'blog',
  'contact',
  'privacy',
] as const

export const CONTENT_ROUTE_DEFINITIONS = [
  { id: 'blog', pathPrefix: '/blog', contentDirectory: 'blog' },
  { id: 'caseStudies', pathPrefix: '/case-studies', contentDirectory: 'case-studies' },
] as const

export function getRoutePath(routeId: string) {
  return APP_ROUTE_DEFINITIONS.find((route) => route.id === routeId)?.path
}

export function createLocalePath(locale: LocaleCode, path: string) {
  return path === '/' ? `/${locale}` : `/${locale}${path}`
}

export function getLocalizedStaticRoutes() {
  return LOCALES.flatMap((locale) =>
    APP_ROUTE_DEFINITIONS.map((route) => createLocalePath(locale, route.path)),
  )
}
