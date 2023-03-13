/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
