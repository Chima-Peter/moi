// tailwind.config.js
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',  // Small phones (iPhone SE, Galaxy A series)
      'sm': '640px',  // Standard phones
      'md': '768px',  // Tablets
      'lg': '1024px', // Laptops
      'xl': '1440px', // Larger desktops
      '2xl': '2560px', // Very large desktops
      '4xl': '3840px', // 4K monitors (optional, future-proof)
    },
    extend: {
      fontFamily: {
        "main": ['']
      }
    },
  },
  plugins: [],
}