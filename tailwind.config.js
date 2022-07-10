/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Saira",
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
        // lg: '3rem',
      },
    },
    extend: {
      backgroundImage: {
        menu: 'url("/src/assets/6.jpg")',
        newsletter: 'url("/src/assets/img/newsletter.png")',
      },
    },
  },
  plugins: [],
};
