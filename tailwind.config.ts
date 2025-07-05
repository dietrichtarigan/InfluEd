/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#df320c',
        'accent-blue': '#0cc0df',
        'light-gray': '#f5f5f5',
        'dark-black': '#222222',
        'custom-black': '#222222',
      },
    },
  },
  plugins: [],
}; 