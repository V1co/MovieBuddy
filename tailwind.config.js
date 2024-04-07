/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('../images/header.jpg')",
      },
      darkMode: 'class',
      animation: {
        slide: 'slide .2s ease-in-out',
      },

      // that is actual animation
      keyframes: ({
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      }),
    },
  },
  plugins: [],
}

