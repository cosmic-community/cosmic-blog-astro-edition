/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        neutral: {
          850: '#1f2028',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '75ch',
            color: '#374151',
            a: {
              color: '#4f46e5',
              '&:hover': {
                color: '#4338ca',
              },
            },
            h1: { color: '#111827' },
            h2: { color: '#111827' },
            h3: { color: '#111827' },
            h4: { color: '#111827' },
            strong: { color: '#111827' },
            blockquote: {
              borderLeftColor: '#6366f1',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}