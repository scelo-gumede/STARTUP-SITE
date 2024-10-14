/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "all":["Inter"]
      },
      colors:{
        "primary":"#3A5CE5",
        "secondary":"#00AFE0",
      }
    },
  },
  plugins: [],
}

