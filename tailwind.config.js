/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'loading-bar': 'loadingBar 1.5s ease-in-out infinite',
        'blink': 'blink 0.8s step-end infinite',
      },
      keyframes: {
        loadingBar: {
          '0%': { transform: 'translateX(-100%)' },
          
          '100%': { transform: 'translateX(250%)' }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      }
    },
  },
  plugins: [],
}