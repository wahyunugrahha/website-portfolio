/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00E6CF", // teal
        accent: "#9DFF6C",  // lime
        ink: "#0A0F14",     // deep dark
      },
      borderRadius: { '3xl': '1.75rem' },
      boxShadow: {
        glow: "0 0 40px -12px rgba(0,230,207,0.45)",
      }
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans']
    }
  },
  plugins: []
}