/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        appRed : '#C8102E',
        appRedHover : '#b70c26',
        appDarkGray: '#323232',
        appLightGray: '#DEDEDE',
        appDimGray: '#7f7f7f',

      },
      screens: {
        'xs': { 'max': '380px' },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
