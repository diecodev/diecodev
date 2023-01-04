const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--poppins)', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
