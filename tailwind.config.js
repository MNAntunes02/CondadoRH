/** @type {import('tailwindcss').Config} */

COLORS = {
  'dark': '#130F3D',
  'primary': '#4D3EFC',
  'second': '#8C83ED',
  'base': '#F6FCFF'
}

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: COLORS,
      backgroundColor: COLORS
    },
  },
  plugins: [],
}

