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
        brand: {
          purple: "#8B5CF6",
          blue: "#3B82F6",
          accent: "#22D3EE",
        }
      }
    },
  },
  plugins: [],
}
