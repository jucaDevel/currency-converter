/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#1A488B',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
     }),
    extend: {
      fontFamily:{
        'roboto':['Roboto','sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

