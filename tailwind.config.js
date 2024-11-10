/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,js,jsx,tsx}', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      gridTemplateColumns: {
         '70/30': '70% 28%'
      },
      colors: {
        secondary: '#4056A1',
        third_choice: '#C5CBE3'
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

