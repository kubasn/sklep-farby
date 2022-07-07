/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        menu: 'url("/src/assets/6.jpg")',
        newsletter: 'url("/src/assets/img/newsletter.png")',
      },
    },
  },
  plugins: [],
};
