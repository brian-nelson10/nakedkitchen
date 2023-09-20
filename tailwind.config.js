/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
       mentra: ['Mentra', 'sans-serif'],
      comic: ['Webcomic', "cursive"],
      xtreem: ['Xtreem', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      gt: ['GT Flexa','sans-serif']
    },
    },
  },
  plugins: [],
}