/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',   // Changed: red-50
          100: '#fee2e2',  // Changed: red-100
          200: '#fecaca',  // Changed: red-200
          300: '#fca5a5',  // Changed: red-300
          400: '#f87171',  // Changed: red-400
          500: '#ef4444',  // Changed: red-500
          600: '#dc2626',  // Changed: red-600
          700: '#b91c1c',  // Changed: red-700
          800: '#991b1b',  // Changed: red-800
          900: '#7f1d1d',  // Changed: red-900
          950: '#450a0a',  // Changed: red-950
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
              color: '#dc2626',  // Changed: primary-600 red
              '&:hover': {
                color: '#b91c1c',  // Changed: primary-700 red
              },
            },
            h1: { color: '#111827' },
            h2: { color: '#111827' },
            h3: { color: '#111827' },
            h4: { color: '#111827' },
            strong: { color: '#111827' },
            blockquote: {
              borderLeftColor: '#ef4444',  // Changed: primary-500 red
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}