/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navCol:
        {
          50: '#e3edff',
          100: '#b6cafe',
          200: '#88a7f7',
          300: '#2B3148',
          400: '#2c61ee',
          500: '#1448d4',
          600: '#0d38a6',
          700: '#062877',
          800: '#00184a',
          900: '#00081e',
        }
      }
    },
  },
  plugins: [],
}