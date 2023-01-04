const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--poppins)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: {
          DEFAULT: '#242424',
        }
      },
      animation: {
        wheel: 'wheel 1s infinite'
      },
      keyframes: {
        wheel: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)'
          },
          '50%': {
            transform: 'translateY(10%)',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
          }
        }
      }
    },
  },
  plugins: [],
}
