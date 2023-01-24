/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
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
      }
    },
  },
  plugins: [],
}
