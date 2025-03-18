/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'loading-bar': 'loadingBar 2s ease-in-out infinite',
        'blink': 'blink 0.8s step-end infinite',
      },
      keyframes: {
        loadingBar: {
          '0%': { width: '0%', left: '0' },
          '50%': { width: '100%', left: '0' },
          '51%': { width: '100%', right: '0' },
          '100%': { width: '0%', right: '0' }
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