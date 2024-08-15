/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pexels-19x14-8478248' : "url('../img/pexels-19x14-8478248.jpg')"
      })
    },
  },
  plugins: [],
}