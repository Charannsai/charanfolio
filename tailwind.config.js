export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
        cursive: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}