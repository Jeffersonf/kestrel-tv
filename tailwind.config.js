/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        surface: '#18181b',
        'surface-hover': '#27272a',
        border: 'rgba(255, 255, 255, 0.08)',
        accent: {
          DEFAULT: '#dc2626',
          hover: '#ef4444',
          subtle: 'rgba(220, 38, 38, 0.14)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
