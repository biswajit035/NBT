import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(ellipse farthest-side at center, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 255, 1) 100%)",
      },
      colors: {
        "MainBg-dark": "#111111",
        gridBg: "#141414",
        "gridBg-blue": "#1b1b3d",
        grey: "#b9b9b9",
        "grey-dark": "#4c4c4c",
        blue: "#4e4ed8",
      },
    },
  },
  plugins: [],
};
export default config;
