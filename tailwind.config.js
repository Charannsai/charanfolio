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
        monolisa: ['MonoLisa', 'monospace'],
        display: ['"Playfair Display"', 'serif'],
        cursive: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}