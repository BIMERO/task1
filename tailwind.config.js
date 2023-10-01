/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        brand:{
          50: '#000000',
          100: '#979797',
          150: '#D0F7FA'
        }
      }
    },
  },
  plugins: [],
}

