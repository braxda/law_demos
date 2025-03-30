/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          700: '#4338ca',
          800: '#3730a3'
        },
        gray: {
          100: '#f3f4f6',
          200: '#e5e7eb'
        }
      }
    },
  },
  plugins: [],
} 