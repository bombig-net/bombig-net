import { describe, expect, it } from 'vitest'
import { FOOTER_NAVIGATION, PRIMARY_NAVIGATION, SERVICE_ROUTE_DEFINITIONS, getLocalizedStaticRoutes, getRoutePath } from '../shared/contracts/routes'
import { getPrerenderRoutes } from '../shared/contracts/prerender'
import { SERVICE_DEFINITIONS } from '../shared/contracts/services'

describe('route contracts', () => {
  it('keeps service routes aligned with service definitions', () => {
    expect(SERVICE_ROUTE_DEFINITIONS.map((item) => item.path)).toEqual(SERVICE_DEFINITIONS.map((item) => item.routePath))
  })

  it('keeps primary navigation route ids resolvable', () => {
    for (const item of PRIMARY_NAVIGATION) {
      expect(getRoutePath(item.routeId)).toBeTruthy()
    }
  })

  it('keeps footer navigation route ids resolvable', () => {
    for (const routeId of FOOTER_NAVIGATION) {
      expect(getRoutePath(routeId)).toBeTruthy()
    }
  })

  it('includes service routes in localized static routes and prerender routes', () => {
    const staticRoutes = getLocalizedStaticRoutes()
    const prerenderRoutes = getPrerenderRoutes()

    for (const route of SERVICE_DEFINITIONS) {
      expect(staticRoutes).toContain(`/en${route.routePath}`)
      expect(staticRoutes).toContain(`/de${route.routePath}`)
      expect(prerenderRoutes).toContain(`/en${route.routePath}`)
      expect(prerenderRoutes).toContain(`/de${route.routePath}`)
    }
  })
})
