/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#ca1c26",
        secondary: "#0a1936",
        "bg-primary": "#f6f1ed",
      },
      fontFamily: {
        noto: ['"Noto Sans"', 'sans-serif'],
      },
    },
  },

  plugins: [require("daisyui")],
};