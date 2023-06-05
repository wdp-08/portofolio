/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    container:{
      center: true,
      padding: '5%',
    },
    fontFamily:{
      gotham: ['Gotham-Book'],
      gothamBlack: ['Gotham-Black']
    },
    extend: {
      colors: {
        secondary: '#FEBF21',
        black:'#2E2E2E',
        grey: '#A6A6A6',
        success: '#259148',
        dark: '#181D31',
        primary: '#0d6efd',
        form: '#ECECEC',
        light: '#E8FFEF',
        greenlight: '#A8D3B5',

      },

      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

