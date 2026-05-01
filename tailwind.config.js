/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      keyframes: {
        'blob': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(20px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-15px, 15px) scale(0.95)' },
        },
      },
      animation: {
        'blob': 'blob 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}