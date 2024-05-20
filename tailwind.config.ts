import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "gray-3": "#828282",
        blue: "#0500ff",
        indigo: "#480083",
        darkorchid: {
          "100": "#7a33b5",
          "200": "#6002ac",
        },
        fuchsia: {
          "100": "#fa4dff",
          "200": "#dc39fc",
          "300": "#e134fe",
          "400": "rgba(250, 77, 255, 0.09)",
        },
        mediumspringgreen: {
          "100": "#1ce0a3",
          "200": "#01c48c",
          "300": "#00b06e",
          "400": "#00ad73",
          "500": "rgba(0, 176, 110, 0.09)",
          "600": "#1ee0a2",
          "700": "#1fdfa2",
          "1000": "#05bf7d",
          "1300": "#00ad70",
        },
        midnightblue: {
          "100": "#270b5b",
          "200": "#111145",
        },
        darkslateblue: {
          "100": "#593d8f",
          "200": "#454578",
        },
        lightslategray: "#7d8595",
        slategray: {
          "100": "#85789c",
          "200": "#6b5f82",
        },
        darkslategray: "#393245",
        gray: {
          "100": "#808080",
          "200": "#17082f",
        },
        aquamarine: {
          "100": "#23e0a6",
          "200": "#22e0a5",
          "300": "#23dfa6",
          "400": "#37e4aa",
        },
        darkgray: "#b0b0b0",
      },
      spacing: {},
      fontFamily: {
        oswald: ["var(--font-oswald)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        orienta: ["var(--font-orienta)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
        "otomanopee-one": ["var(--font-otomanopee-one)", "sans-serif"],
        basic: ["var(--font-basic)", "sans-serif"],
        bungee: ["var(--font-bungee)", "cursive"],
        "great-vibes": ["var(--font-great-vibes)", "cursive"],
      },
    },
    animation: {
      border: "background ease infinite",
    },
    keyframes: {
      background: {
        "0%, 100%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
      },
    },
  },
  plugins: [],
};
export default config;
