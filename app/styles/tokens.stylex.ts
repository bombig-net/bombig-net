import * as stylex from '@stylexjs/stylex'

export const breakpoints = stylex.defineConsts({
  sm: '@media (min-width: 640px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 1024px)',
  xl: '@media (min-width: 1280px)',
})

export const colors = stylex.defineConsts({
  background: '#071118',
  backgroundAlt: '#0b1820',
  surface: '#0f2029',
  surfaceStrong: '#14303d',
  surfaceSoft: 'rgba(20, 48, 61, 0.58)',
  line: 'rgba(240, 246, 252, 0.12)',
  lineStrong: 'rgba(126, 224, 195, 0.28)',
  text: '#f3f7fb',
  textMuted: '#b9c6d2',
  textSoft: '#88a0b2',
  accent: '#7ee0c3',
  accentStrong: '#43c0a2',
  accentWash: 'rgba(126, 224, 195, 0.14)',
  focus: '#7db7ff',
  danger: '#f09ea8',
  success: '#98e0b3',
  shadow: 'rgba(2, 7, 11, 0.38)',
  overlay: 'rgba(4, 10, 14, 0.74)',
})

export const fonts = stylex.defineConsts({
  sans: '"Manrope", "Segoe UI", sans-serif',
  display: '"Space Grotesk", "Segoe UI", sans-serif',
})

export const spacing = stylex.defineConsts({
  xxs: '0.25rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
  xxxl: '4.5rem',
})

export const radius = stylex.defineConsts({
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  pill: '999px',
})

export const sizing = stylex.defineConsts({
  container: '72rem',
  prose: '44rem',
})

export const shadows = stylex.defineConsts({
  card: '0 24px 64px rgba(2, 7, 11, 0.32)',
  focus: '0 0 0 3px rgba(125, 183, 255, 0.28)',
})

export const motion = stylex.defineConsts({
  fast: '160ms',
  base: '220ms',
  slow: '320ms',
  ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
})

export const zIndex = stylex.defineConsts({
  header: '30',
  overlay: '40',
  drawer: '50',
})
