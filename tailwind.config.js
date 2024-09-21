/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        appRed : '#AE0000',
        appGreen: '#41901c',
        appDarkGray: '#323232',
        appLightGray: '#DEDEDE'

      }
    },
  },
  plugins: [],
}
