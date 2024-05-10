/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#5dbf4d",
        primaryContent: "#8F96A6",
        primarySubcontent: "#343740",
        primaryBase: "#fff",
        primaryAccent: "#498c3f",
        primaryBg: "#0d0d0d",
      }
    },
  },
  plugins: [],
}

