/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0a0a0b",
        card: "#111318",
        soft: "#171a21",
      },
      boxShadow: {
        glow: "0 20px 80px rgba(0, 0, 0, 0.35)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
