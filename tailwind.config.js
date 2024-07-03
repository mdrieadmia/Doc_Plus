/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT(
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'custom-gradient': 'linear-gradient(180deg, rgba(0, 193, 157, 0), rgba(2, 0, 67, 0.47))',
        },
      },
    },
    plugins: [],
  }
);
