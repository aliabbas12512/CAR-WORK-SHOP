import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#08080a",
        surface: "#111114",
        "surface-2": "#18181c",
        "surface-3": "#202024",
        border: "rgba(255,255,255,0.08)",
        foreground: "#f3f2ee",
        muted: "#9a9aa3",
        gold: {
          DEFAULT: "#c9a15a",
          light: "#e8cd94",
          dark: "#8f6f37",
        },
        steel: "#8b929c",
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        condensed: ["var(--font-condensed)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #e8cd94 0%, #c9a15a 45%, #8f6f37 100%)",
        "radial-fade": "radial-gradient(circle at center, rgba(201,161,90,0.15) 0%, rgba(0,0,0,0) 70%)",
      },
      boxShadow: {
        gold: "0 8px 30px -8px rgba(201,161,90,0.45)",
        card: "0 10px 40px -12px rgba(0,0,0,0.6)",
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        "spin-slower": "spin 32s linear infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
