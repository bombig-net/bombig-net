export const SERVICE_DEFINITIONS = [
  {
    id: 'educationResearch',
    slug: 'education-research',
    routePath: '/services/education-research',
    navKey: 'navServices.educationResearch',
    homeKey: 'home.services.items.educationResearch',
    indexCardKey: 'servicesIndex.cards.educationResearch',
    pageKey: 'servicePages.educationResearch',
  },
  {
    id: 'agencyPartner',
    slug: 'agency-partner',
    routePath: '/services/agency-partner',
    navKey: 'navServices.agencyPartner',
    homeKey: 'home.services.items.agencyPartner',
    indexCardKey: 'servicesIndex.cards.agencyPartner',
    pageKey: 'servicePages.agencyPartner',
  },
  {
    id: 'smbFlatFee',
    slug: 'smb-flat-fee',
    routePath: '/services/smb-flat-fee',
    navKey: 'navServices.smbFlatFee',
    homeKey: 'home.services.items.smbFlatFee',
    indexCardKey: 'servicesIndex.cards.smbFlatFee',
    pageKey: 'servicePages.smbFlatFee',
  },
] as const

export type ServiceId = (typeof SERVICE_DEFINITIONS)[number]['id']
