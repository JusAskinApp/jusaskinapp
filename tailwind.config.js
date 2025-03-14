/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-500': '#4AE6A7',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
}