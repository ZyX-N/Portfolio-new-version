/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'black-rgba': 'rgba(0, 0, 0, 0.4)'
      },
      width: {
        '128': '140px',
        'cal': 'calc(100vw - 140px)',
      },
      fontSize: {
        'sm': '0.8px'
      },
      lineHeight: {
        '12': '3px',
      },
      inset: {
        '3px': '3px',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        'smallmobile': '400px',
      },
      minHeight: {
        '1/2': '50%',
      },
      letterSpacing: {
        tightest: '2px',
      },
      zIndex: {
        '100': '100',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { margin : "0 0 0 5px" },
          '50%': { margin : "0 0 0 10px" },
        }
      }
    },
  },
  plugins: [],
}
