/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    colors: {
      'pale': '#d9d9d9',
      'white': '#ffffff'
    },
    fontFamily: {
      'ibm-plex-sans':  ['IBM Plex Sans', 'sans-serif'],
      'bebas': ['Bebas Neue', 'cursive']
    }
  },
  plugins: [],
}
