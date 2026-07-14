/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d9488', // Teal-600
          hover: '#14b8a6'    // Teal-500
        },
        accent: '#10b981'     // Emerald (success / calculator output)
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        heading: ['Plus Jakarta Sans', ...fontFamily.sans]
      }
    }
  },
  plugins: []
};
