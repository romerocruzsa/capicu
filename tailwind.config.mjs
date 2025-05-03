/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'capicu-primary': '#003A5D', // Deep blue from logo
        'capicu-accent': '#D8272D', // Red accent
        'capicu-beige': '#F9F5EA', // Light background
        'capicu-charcoal': '#2C2C2E', // Dark text
        'capicu-navy': {
          50: '#E6F0F5',
          100: '#C7E0EB',
          200: '#99C5D9',
          300: '#6BAAC7',
          400: '#3D8FB5',
          500: '#003A5D', // Deep blue from logo
          600: '#002E4A',
          700: '#002337',
          800: '#001724',
          900: '#000B11',
        },
        'capicu-red': {
          50: '#FBE6E7',
          100: '#F7C7C9',
          200: '#F0999C',
          300: '#E96B6F',
          400: '#E23D42',
          500: '#D8272D', // Red accent
          600: '#B01F24',
          700: '#88171B',
          800: '#601012',
          900: '#380809',
        },
        slate: {
          50: '#F5F5DC',  // Beige
          100: '#E5E5E5',
          200: '#D4D4D4',
          300: '#A3A3A3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#262626',
          800: '#171717',
          900: '#000080',  // Navy blue
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'system-ui', 'sans-serif'],
        heading: ['Inter Variable', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'capicu': '0.75rem',
      },
      boxShadow: {
        'capicu': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
