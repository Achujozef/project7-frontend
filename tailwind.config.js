/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'red-200':'rgb(220 252 231)' // You can customize the color code
      },
    },
  },
  plugins: [],
}

