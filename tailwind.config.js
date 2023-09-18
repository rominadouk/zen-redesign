/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'light-brown' : '#D5B9B1',
      'off-white' : '#FAF9F6',
      'sea-green-blue': '#0F7173',
      'lime':'#E8EC67',
      'black': '#000000',
      'smoke-darkest': 'rgba(0, 0, 0, 0.9)',
      'smoke-darker': 'rgba(0, 0, 0, 0.75)',
      'smoke-dark': 'rgba(0, 0, 0, 0.6)',
      'smoke': 'rgba(0, 0, 0, 0.5)',
      'smoke-light': 'rgba(0, 0, 0, 0.4)',
      'smoke-lighter': 'rgba(0, 0, 0, 0.25)',
      'smoke-lightest': 'rgba(0, 0, 0, 0.1)',
      'light-blue-goals': 'rgba(164,189,190,.5)',
      'goal-modal-blue':'#C3D3D4'

    },
    extend: {
      fontFamily:{
        'brand': ['Righteous'],
        'archivo': ['Archivo'],
      },
    },
  },
  plugins: [],
}

