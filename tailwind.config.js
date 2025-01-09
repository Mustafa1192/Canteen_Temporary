/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "fresh-green": "#00C853",
        "warm-orange": "#FF6D00",
        "cool-teal": "#009688",
        "soft-yellow": "#FFEB3B",
        "charcoal-gray": "#212121",
        "light-gray": "#F5F5F5",
        "ruby-red": "#D32F2F",
      },
      animation: {
        "fade-in-out": "fadeInOut 3s ease-in-out infinite",
        bounce: "bounce 1.5s infinite",
      },
      keyframes: {
        fadeInOut: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        "marquee-reverse": "marquee-reverse 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
}

