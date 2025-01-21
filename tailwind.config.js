/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        carpethen: ['carpethen', 'sans-serif'],
        gothic:['gothic','sans-serif'],
        bigilla:['bigilla','sans-serif'],

      },
      gridTemplateColumns:{
      hallmark:"repeat(3, minmax(20px, 1fr))"
      },
      fontSize: {
        'card': 'clamp(1.25rem, 0.6346rem + 0.9615vw, 1.5rem)',
      }
      
    },
  },
  plugins: [],
}

