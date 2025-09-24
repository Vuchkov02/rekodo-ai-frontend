import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        background: {
          DEFAULT: "#c2dfc9",
          dark: "rgb(26, 31, 28)",
          card: "#febe10",
          secondary: "#febe10",
        },

        // Text Colors
        text: {
          primary: "#000000",
          secondary: "#000000",
          muted: "#000000",
          dark: "#000000",
        },

        // UI Elements
        border: "rgb(26, 31, 28)",
        divider: "rgba(26, 31, 28, 0.3)",
        shadow: "rgba(26, 31, 28, 0.5)",

        // Accent Colors
        accent: {
          primary: "#c2dfc9",
          secondary: "#febe10",
        },

        // Interactive States
        success: "#6ab46a",
        warning: "#f4a261",
        error: "#e76f51",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;