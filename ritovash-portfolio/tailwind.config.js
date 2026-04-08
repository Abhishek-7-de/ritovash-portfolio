/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Outfit", "ui-sans-serif", "system-ui"],
        pixel: ['"Press Start 2P"', "ui-sans-serif", "system-ui"],
      },
      colors: {
        base: "#050505",
        surface: "#0e0e0e",
        surfaceHover: "#161616",
        border: "#202020",
        primary: "#3b82f6",
        primaryGlow: "rgba(59, 130, 246, 0.4)",
        secondary: "#10b981",
        accent: "#6366f1",
        retroCoin: "#ffd700",
        retroGreen: "#00cc00",
      },
      boxShadow: {
        glow: "0 0 40px -10px var(--tw-shadow-color)",
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
        neonCoin: "0 0 15px rgba(255, 215, 0, 0.8)",
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'mario-float': 'floatUpDown 2s ease-in-out infinite',
        'mario-spin': 'spinCoin 1.5s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
