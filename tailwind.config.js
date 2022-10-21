/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      // Mobile
      sm: '375px'
    },
    fontFamily: {
      Epilogue: ['Epilogue', sans-serif]
    },
    extend: {},
  },
  colors: {
    'white': 'hsl(0, 0%, 98%)',
    'gray': 'hsl(0, 0%, 41%)',
    'black': 'hsl(0, 0%, 8%)'
  },
  plugins: [],
}
