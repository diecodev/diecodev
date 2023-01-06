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
        wheel: 'wheel 1s infinite',
        borders: 'borders 20s infinite',
      },
      height:{
        custom: 'calc(100vh - 52px)',
      },
      dropShadow: {
        custom: '0 0 100px #BCF2C1'
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
        },
        borders: {
          '0%, 100%': {
            'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            'border-radius': '30% 60% 70% 40% / 50% 60% 30% 60%'
          }
        }
      }
    },
  },
  plugins: [],
}
