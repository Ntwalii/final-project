/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export const content = ["./src/**/*.{html,js}", "./*.html"]
export const theme = {
  extend: {
    colors: {
      "customBlue": "#7FDBC5",
      "customGray": "#D9D9D9",
      newRed: "#b5071c",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      stone: colors.warmGray,
      sky: colors.lightBlue,
      neutral: colors.trueGray,
      gray: colors.coolGray,
      slate: colors.blueGray,
      red:colors.red
    }
  },
}
export const plugins = []

