/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom color here
        companyBG: '#08112F',
        CustomOrange: '#FF7A00',
      },
    },
  },
  plugins: [require("daisyui")],
});