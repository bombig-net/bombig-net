export default defineAppConfig({
  site: {
    name: 'Bombig',
    shortName: 'Bombig',
    email: 'hello@bombig.net',
    phone: '+1 (212) 555-0118',
    location: 'Brooklyn, NY',
  },
  navigation: {
    primary: [
      { key: 'nav.home', to: '/' },
      { key: 'nav.about', to: '/about' },
      { key: 'nav.caseStudies', to: '/case-studies' },
      { key: 'nav.blog', to: '/blog' },
      { key: 'nav.contact', to: '/contact' },
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
