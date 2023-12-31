import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        primary: "#bd0107",
        "primary-content": "#ffbec0",
        "primary-dark": "#8a0105",
        "primary-light": "#f00109",

        secondary: "#bd7801",
        "secondary-content": "#ffe7be",
        "secondary-dark": "#8a5801",
        "secondary-light": "#f09801",

        background: "#1a1a1a",
        foreground: "#262626",
        border: "#404040",

        copy: "#fbfbfb",
        "copy-light": "#d9d9d9",
        "copy-lighter": "#a6a6a6",

        success: "#01bd01",
        warning: "#bdbd01",
        error: "#bd0101",

        "success-content": "#beffbe",
        "warning-content": "#000000",
        "error-content": "#ffbebe"
      }
    }
  },
  plugins: []
};
export default config;
