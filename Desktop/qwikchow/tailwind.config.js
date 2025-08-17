/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
