/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{tsx,ts,jsx,js}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#101116",
        secondaryBg: "#191A21",
        surface: "#22232B",
        surfaceLight: "#2c2e38",
        primaryText: "#F5F4F0",
        secondaryText: "#A6A6B0",
        accent: {
          DEFAULT: "#A6FF4D",
          hover: "#8fe33b",
          muted: "rgba(166, 255, 77, 0.15)",
          glow: "rgba(166, 255, 77, 0.35)",
        },
        borderLight: "rgba(255, 255, 255, 0.12)",
        borderDark: "rgba(255, 255, 255, 0.06)",
      },
      fontFamily: {
        syne: ["'Syne'", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "Inter", "system-ui", "sans-serif"],
        mono: ["'Space Grotesk'", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wider: "0.05em",
        widest: "0.15em",
        ultra: "0.25em",
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-slow': 'marquee 45s linear infinite',
        'marquee-reverse': 'marquee-reverse 32s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
