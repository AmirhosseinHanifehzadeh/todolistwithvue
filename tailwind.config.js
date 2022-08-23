/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'black': '#1D242B',
      'gray': '#DFDFDE', 
      'white': '#F7F7F7',
      'yellow': '#F0A500'
    }
  },
  plugins: [],
}