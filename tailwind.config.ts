import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        paper: 'var(--paper)',
        mist: 'var(--mist)',
        glow: 'var(--glow)',
        ember: 'var(--ember)',
        lilac: 'var(--lilac)',
        acid: 'var(--acid)',
      },
      fontFamily: {
        sans: ['Manrope', 'Segoe UI', 'sans-serif'],
        display: ['Space Grotesk', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
