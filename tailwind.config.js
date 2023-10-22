/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        md: "925px",
        lg: "1210px",
        xl: "1490px",
      },
    },
  },
  plugins: [],
};
