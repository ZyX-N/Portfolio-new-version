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
      }
    },
  },
  plugins: [],
}
