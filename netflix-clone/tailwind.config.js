// @type {import('tailwindcss').Config} 
import tailwindScrollbar from 'tailwind-scrollbar';
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
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, transparent, rgba(37,37,36,0.90), #111)',
        
    },
    },
    
  },

  plugins: [
      // require('tailwind-scrollbar')({ nocompatible: true }),
      tailwindScrollbar({ nocompatible: true }),
      
    ],
}

