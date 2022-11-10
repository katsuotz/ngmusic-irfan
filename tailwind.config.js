/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors.js");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
    fontFamily: {
      sans: ['Roboto Light', 'Roboto Medium', 'Roboto', 'sans-serif'],
    },
    colors: {
      black: colors.black,
      gray: {
        ...colors.gray,
        'gray-200': '#e28f0'
      },
      white: colors.white,
      primary: '#712bda',
      'primary-light': '#a45deb',
      green: '#10b981',
      yellow: '#F5B014',
      'blue-gray-500': '#64748b',
      dialog: 'rgba(28, 28, 45, 0.9)',
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}
