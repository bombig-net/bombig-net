import * as stylex from '@stylexjs/stylex'
import { colors, radius, spacing } from './tokens.stylex'

export const defaultLayoutStyles = stylex.create({
  skipLink: {
    position: 'absolute',
    top: '-100px',
    left: spacing.lg,
    zIndex: 60,
    borderRadius: radius.pill,
    backgroundColor: colors.text,
    color: colors.background,
    paddingInline: spacing.md,
    paddingBlock: spacing.sm,
    fontWeight: 700,
    textDecoration: 'none',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xxxl,
    paddingTop: spacing.xl,
  },
})

export const sectionHeadingStyles = stylex.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  },
  description: {
    maxWidth: '44rem',
  },
})

export const postCardStyles = stylex.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: spacing.lg,
    minHeight: '100%',
    padding: spacing.xl,
    borderRadius: radius.lg,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.line,
    backgroundColor: colors.surfaceSoft,
    color: colors.text,
    textDecoration: 'none',
  },
  metaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  },
})

export const caseCardStyles = stylex.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.lg,
    minHeight: '100%',
    padding: spacing.xl,
    borderRadius: radius.lg,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.line,
    backgroundColor: colors.surfaceSoft,
    color: colors.text,
    textDecoration: 'none',
  },
  metaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  },
  tagRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
})

export const calloutPanelStyles = stylex.create({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
    gap: spacing.xl,
    padding: spacing.xxl,
    alignItems: 'center',
  },
  copy: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  },
})

export const siteFooterStyles = stylex.create({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))',
    gap: spacing.xl,
    paddingBlock: spacing.xxl,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  },
  tagline: {
    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
  },
  metaRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  link: {
    color: colors.textMuted,
    textDecoration: 'none',
  },
})

export const siteHeaderStyles = stylex.create({
  row: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
    gap: spacing.md,
    alignItems: 'center',
    paddingBlock: spacing.md,
  },
  brand: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: spacing.sm,
    color: colors.text,
    textDecoration: 'none',
    fontWeight: 700,
    letterSpacing: '-0.02em',
  },
  brandMark: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2rem',
    height: '2rem',
    borderRadius: radius.pill,
    backgroundColor: colors.accent,
    color: colors.background,
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  link: {
    color: colors.textMuted,
    textDecoration: 'none',
    paddingInline: spacing.sm,
    paddingBlock: spacing.xs,
    borderRadius: radius.pill,
  },
  linkActive: {
    color: colors.text,
    backgroundColor: colors.accentWash,
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing.sm,
    justifyContent: 'flex-end',
  },
  localeButton: {
    minWidth: '3.75rem',
  },
})

export const homePageStyles = stylex.create({
  heroCopy: { maxWidth: '42rem' },
  heroPanel: { display: 'flex', flexDirection: 'column', gap: spacing.lg, padding: spacing.xxl },
  panelTitle: { fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' },
  pointList: { display: 'grid', gap: spacing.md },
  pointCard: { display: 'flex', flexDirection: 'column', gap: spacing.sm, padding: spacing.lg },
  serviceCard: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: spacing.xl, padding: spacing.xl, color: 'inherit', textDecoration: 'none' },
  serviceCardBody: { display: 'flex', flexDirection: 'column', gap: spacing.md },
  logoSection: { gap: spacing.lg },
  logoCard: { padding: spacing.lg, textAlign: 'center' },
  foundersColumn: { display: 'grid', gap: spacing.lg },
  founderCard: { display: 'flex', flexDirection: 'column', gap: spacing.sm, padding: spacing.xl },
  blogHeader: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))', gap: spacing.lg, alignItems: 'end' },
  inlineButton: { width: 'fit-content' },
})

export const blogIndexPageStyles = stylex.create({ copy: { maxWidth: '44rem' } })
export const caseStudiesIndexPageStyles = stylex.create({ copy: { maxWidth: '44rem' } })
export const blogDetailPageStyles = stylex.create({ copy: { maxWidth: '44rem' }, metaRow: { display: 'flex', flexWrap: 'wrap', gap: spacing.md }, proseWrap: { padding: spacing.xxl } })
export const caseStudyDetailPageStyles = stylex.create({ copy: { maxWidth: '44rem' }, metaRow: { display: 'flex', flexWrap: 'wrap', gap: spacing.md }, proseWrap: { padding: spacing.xxl }, sidebar: { display: 'flex', flexDirection: 'column', gap: spacing.xl, padding: spacing.xl }, sidebarGroup: { display: 'flex', flexDirection: 'column', gap: spacing.sm }, cta: { width: 'fit-content' } })
export const privacyPageStyles = stylex.create({ copy: { maxWidth: '44rem' }, article: { display: 'grid', gap: spacing.xxl, padding: spacing.xxl }, section: { display: 'grid', gap: spacing.md }, sectionTitle: { fontSize: '2rem' } })
export const contactPageStyles = stylex.create({ contactMeta: { display: 'grid', gap: spacing.xs, color: colors.textMuted }, form: { display: 'grid', gap: spacing.sm, padding: spacing.xxl }, hiddenField: { position: 'absolute', inlineSize: '1px', blockSize: '1px', overflow: 'hidden', clipPath: 'inset(50%)' }, textarea: { minHeight: '12rem', resize: 'vertical' }, submit: { marginTop: spacing.sm }, note: { fontSize: '0.92rem' }, success: { color: colors.success }, error: { color: colors.danger } })
export const aboutPageStyles = stylex.create({ copy: { maxWidth: '44rem' }, systemPanel: { display: 'grid', gap: spacing.xl, padding: spacing.xxl }, systemGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))', gap: spacing.md }, systemNode: { padding: spacing.lg }, simpleCard: { display: 'flex', flexDirection: 'column', gap: spacing.md, padding: spacing.xl }, stack: { display: 'grid', gap: spacing.lg }, stackTight: { display: 'grid', gap: spacing.xs }, guardrails: { display: 'grid', gap: spacing.md, padding: spacing.xl, paddingLeft: spacing.xxl }, closing: { maxWidth: '48rem' }, inlineLink: { color: colors.accent, marginLeft: spacing.xs } })
export const servicesIndexPageStyles = stylex.create({ panel: { display: 'flex', flexDirection: 'column', gap: spacing.lg, padding: spacing.xxl }, panelTitle: { fontSize: '2rem' }, panelPoints: { display: 'grid', gap: spacing.md }, pointCard: { display: 'flex', flexDirection: 'column', gap: spacing.sm, padding: spacing.lg }, serviceCard: { display: 'flex', flexDirection: 'column', gap: spacing.lg, justifyContent: 'space-between', padding: spacing.xl, color: 'inherit', textDecoration: 'none' }, serviceCardBody: { display: 'flex', flexDirection: 'column', gap: spacing.md }, tagRow: { display: 'flex', flexWrap: 'wrap', gap: spacing.sm }, pointList: { display: 'grid', gap: spacing.md } })
export const agencyPartnerPageStyles = stylex.create({ heroPanel: { display: 'grid', gap: spacing.lg, padding: spacing.xxl }, pointList: { display: 'grid', gap: spacing.md }, pointCard: { display: 'grid', gap: spacing.sm, padding: spacing.lg }, simpleCard: { display: 'grid', gap: spacing.md, padding: spacing.xl }, stack: { display: 'grid', gap: spacing.lg }, stackTight: { display: 'grid', gap: spacing.sm }, logoPanel: { display: 'grid', gap: spacing.lg, padding: spacing.xxl }, logoGrid: { display: 'flex', flexWrap: 'wrap', gap: spacing.sm }, processCard: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))', gap: spacing.sm, padding: spacing.lg, alignItems: 'center' }, faqCard: { padding: spacing.xl }, faqSummary: { cursor: 'pointer', marginBottom: spacing.md }, finalCta: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))', gap: spacing.xl, padding: spacing.xxl, alignItems: 'center' } })
export const smbFlatFeePageStyles = stylex.create({ heroPanel: { display: 'grid', gap: spacing.lg, padding: spacing.xxl }, promiseCard: { display: 'grid', gap: spacing.sm, padding: spacing.lg }, simpleCard: { display: 'grid', gap: spacing.md, padding: spacing.xl }, stack: { display: 'grid', gap: spacing.lg }, stackTight: { display: 'grid', gap: spacing.sm }, logoPanel: { display: 'grid', gap: spacing.lg, padding: spacing.xxl }, logoGrid: { display: 'flex', flexWrap: 'wrap', gap: spacing.sm }, processCard: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))', gap: spacing.sm, padding: spacing.lg, alignItems: 'center' }, faqCard: { padding: spacing.xl }, faqSummary: { cursor: 'pointer', marginBottom: spacing.md }, finalCta: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))', gap: spacing.xl, padding: spacing.xxl, alignItems: 'center' } })
export const educationResearchPageStyles = stylex.create({ heroPanel: { display: 'grid', gap: spacing.lg, padding: spacing.xxl }, pointCard: { display: 'grid', gap: spacing.sm, padding: spacing.lg }, imageCard: { overflow: 'hidden' }, imageTall: { width: '100%', height: '15rem', objectFit: 'cover', display: 'block' }, imageShort: { width: '100%', height: '12rem', objectFit: 'cover', display: 'block' }, logoCard: { display: 'flex', alignItems: 'center', justifyContent: 'center', padding: spacing.lg, minHeight: '8rem' }, logoImage: { maxWidth: '100%', maxHeight: '2.5rem', objectFit: 'contain' }, stack: { display: 'grid', gap: spacing.lg }, stackTight: { display: 'grid', gap: spacing.sm }, simpleCard: { display: 'grid', gap: spacing.md, padding: spacing.xl }, testimonialCard: { display: 'grid', gap: spacing.lg, padding: spacing.xl }, testimonialHeader: { display: 'flex', gap: spacing.md, alignItems: 'center' }, avatar: { width: '3.25rem', height: '3.25rem', borderRadius: '999px', objectFit: 'cover' }, addonCard: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))', gap: spacing.xl, padding: spacing.xl, alignItems: 'start' }, inlineButton: { width: 'fit-content' }, projectCard: { display: 'grid', gap: spacing.lg, overflow: 'hidden', padding: spacing.md }, projectLink: { fontSize: '1.4rem', fontWeight: 700 }, logoRow: { display: 'flex', flexWrap: 'wrap', gap: spacing.md, alignItems: 'center' }, projectLogo: { maxHeight: '2rem', width: 'auto', objectFit: 'contain' }, finalCta: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))', gap: spacing.xl, padding: spacing.xxl, alignItems: 'center' } })
