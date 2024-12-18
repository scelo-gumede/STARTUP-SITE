/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "all":["Opens Sans"]
      },
      colors:{
        "primary":"#3A5CE5",
        "secondary":"#00AFE0",
        "pinkPrimary":"#FA66EB"
      },
      fontSize: {
        bigFont: '3.75rem',   // Custom large font/spacing
        mediumFont: '2rem', // Custom medium font/spacing
        textFont: '1rem',     // Custom standard font/spacing
      },
    },
  },
  plugins: [],
}

