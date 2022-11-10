/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors.js");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    colors: {
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
      primary: '#712bda',
      'primary-light': '#a45deb',
      danger: '#E23636',
      'danger-dark': '#911c1c',
      warning: '#EDB95E',
      'warning-dark': '#b08436',
      success: '#82DD55',
      'success-dark': '#57a92d',
      'dark-blue': '#313860',
      dark: '#151928',
      'blue-gray-500': '#64748b'
    },
  },
  plugins: [],
}
