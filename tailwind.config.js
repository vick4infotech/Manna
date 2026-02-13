/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050B1A',
          900: '#0B1533',
          800: '#0E1B44',
        },
        tealish: {
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.18)',
        glow: '0 0 0 1px rgba(20,184,166,.15), 0 16px 40px rgba(0,0,0,.25)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
