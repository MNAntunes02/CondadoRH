/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#251932',
        'primary': '#A052EF',
        'second': '#D3CADD'
      },
      backgroundColor: {
        'dark': '#251932',
        'primary': '#A052EF',
        'second': '#D3CADD'
      }
    },
  },
  plugins: [],
}

