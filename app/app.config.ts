export default defineAppConfig({
  site: {
    name: 'bombig.net',
    shortName: 'bombig.net',
    email: 'hello@bombig.net',
    phone: '+1 (212) 555-0118',
    location: 'Brooklyn, NY',
  },
  navigation: {
    primary: [
      { key: 'nav.home', to: '/' },
      {
        key: 'nav.services',
        to: '/services',
        children: [
          { key: 'navServices.educationResearch', to: '/services/education-research' },
          { key: 'navServices.agencyPartner', to: '/services/agency-partner' },
          { key: 'navServices.smbFlatFee', to: '/services/smb-flat-fee' },
        ],
      },
      { key: 'nav.caseStudies', to: '/case-studies' },
      { key: 'nav.about', to: '/about' },
    ],
    footer: [
      { key: 'nav.services', to: '/services' },
      { key: 'nav.caseStudies', to: '/case-studies' },
      { key: 'nav.blog', to: '/blog' },
      { key: 'nav.contact', to: '/contact' },
      { key: 'nav.privacy', to: '/privacy' },
    ],
  },
  socials: [
    { label: 'Behance', href: 'https://www.behance.net' },
    { label: 'Dribbble', href: 'https://dribbble.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  ],
})
