/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',   // Changed: orange-50
          100: '#ffedd5',  // Changed: orange-100
          200: '#fed7aa',  // Changed: orange-200
          300: '#fdba74',  // Changed: orange-300
          400: '#fb923c',  // Changed: orange-400
          500: '#f97316',  // Changed: orange-500
          600: '#ea580c',  // Changed: orange-600
          700: '#c2410c',  // Changed: orange-700
          800: '#9a3412',  // Changed: orange-800
          900: '#7c2d12',  // Changed: orange-900
          950: '#431407',  // Changed: orange-950
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
              color: '#ea580c',  // Changed: primary-600 orange
              '&:hover': {
                color: '#c2410c',  // Changed: primary-700 orange
              },
            },
            h1: { color: '#111827' },
            h2: { color: '#111827' },
            h3: { color: '#111827' },
            h4: { color: '#111827' },
            strong: { color: '#111827' },
            blockquote: {
              borderLeftColor: '#f97316',  // Changed: primary-500 orange
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}