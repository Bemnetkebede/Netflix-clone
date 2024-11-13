// @type {import('tailwindcss').Config} 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        inter: ['Inter', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
        monsieur: ['Monsieur La Doulaise', 'serif'], // Add this line
        playfair: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}

