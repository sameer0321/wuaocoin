/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat'],
    },
    backgroundImage: {
      'text-gradient': ['linear-gradient(180deg, #FFBA3B -9.01%, #FFA53B 43.37%, #FF983B 89.55%)'],
      'bg-gradient': ['linear-gradient(180deg, #FFBA3B -9.01%, #FFA53B 43.37%, #FF983B 89.55%)'],
      'bg-unset': 'none',
      // 'border-gradient': ['linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 51.56%, rgba(255, 255, 255, 0.00) 100%)'],
    },

    extend: {
      backgroundSize: {
        '100%': ' 100% 75%',
        'complete': '100% 100%',
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
        'wiggle-slow': 'wiggle 10s linear alternate infinite',
      },
      keyframes: {
        wiggle: {
          '0%':  { 'border-radius': '50% 63% 37% 50% / 70% 30% 74% 26%' },
          '20%': { 'border-radius': '45% 45% 55% 55% / 53% 47% 49% 51%' },
          '40%': { 'border-radius': '67% 38% 62% 33% / 26% 74% 44% 56%' },
          '60%': { 'border-radius': '45% 77% 23% 55% / 74% 26% 34% 66%' },
          '80%': { 'border-radius': '45% 77% 23% 55% / 53% 47% 47% 53%' },
          '100%': { 'border-radius': '50% 63% 37% 50% / 70% 30% 74% 26%' },
        },
      },
    },
  },
  plugins: [],
}
