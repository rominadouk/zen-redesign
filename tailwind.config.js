/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'light-brown' : '#D5B9B1',
      'off-white' : '#FAF9F6',
      'sea-green-blue': '#0F7173'
    },
    extend: {
      fontFamily:{
        'header': ['Righteous']
      },
    },
  },
  plugins: [],
}

