/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter Variable', "Inter", ...defaultTheme.fontFamily.sans],
        serif: ['Source Serif Pro', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        wob: {
          level1: '#EBEBEB',
          level2: '#D2D2D2',
          level3: '#BFBFBF',
        },
        bow: {
          level1: '#141414',
          level2: '#404040',
          level3: '#7E7E7E',
        },
        primary: "#4ADE80",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}