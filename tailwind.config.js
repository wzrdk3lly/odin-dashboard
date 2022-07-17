/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        custom: '1fr 5fr',
        main: '3fr 1fr',
      },
      gridTemplateRows:{
        custom: '1.1fr 5fr',
        
      }
    },
  },
  plugins: [],
}
