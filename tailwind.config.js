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
        discoverWhite: '#F9F9F9',
        customLBlue: '#599EF3',
      customBorder: '#D9D9D9',
      },
    },
  },
  plugins: [require("daisyui")],
});