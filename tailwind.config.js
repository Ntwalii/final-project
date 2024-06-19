/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors:{
        "customBlue":"#7FDBC5",
        "customGray":"#D9D9D9"
      }
    },
  },
  plugins: [],
}

