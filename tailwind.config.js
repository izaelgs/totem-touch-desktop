/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
    colors: {
      red: { ...colors.red, 650: '#CD1111', 550: '#CD1111' },
      gray: { ...colors.gray, 350: '#D9D9D9', 450: '#414141' },
      stone: { ...colors.stone, 350: '#A4A4A4', },
      amber: { ...colors.amber, 450: '#FCB23C', },
      white: colors.white,
      transparent: colors.transparent,
    },
  },
  plugins: [],
}

