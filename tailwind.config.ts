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
        mediumseagreen: {
          "100": "#1ce0a3",
          "200": "#01c48c",
          "300": "#00b06e",
          "400": "#00ad73",
          "500": "rgba(0, 176, 110, 0.09)",
        },
        gray: "#808080",
        aquamarine: {
          "100": "#23e0a6",
          "200": "#22e0a5",
          "300": "#23dfa6",
        },
        blue: "#0500ff",
        indigo: "#480083",
        darkorchid: {
          "100": "#7a33b5",
          "200": "#6002ac",
        },
        darkgray: "#b0b0b0",
        fuchsia: {
          "100": "#fa4dff",
          "200": "#dc39fc",
          "300": "#e134fe",
          "400": "rgba(250, 77, 255, 0.09)",
        },
        mediumspringgreen: {
          "100": "#38f2af",
          "200": "#1ce4a1",
          "300": "#1ce3a1",
        },
        "gray-3": "#828282",
      },
      spacing: {},
      fontFamily: {
        oswald: "Oswald",
        inter: "Inter",
        orienta: "Orienta",
        inherit: "inherit",
        nunito: "Nunito",
        "otomanopee-one": "'Otomanopee One'",
        basic: "Basic",
        bungee: "Bungee",
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
  },
  plugins: [],
};
export default config;
