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
        "doubleCtablet":
          "radial-gradient(circle at 5% 130%, #4e4ed8 2%, transparent 35%), radial-gradient(circle at 90% 0%, #4e4ed8 2%, transparent 35%)",
        "doubleCmobile":
          "radial-gradient(circle at 5% 130%, #4e4ed8 2%, transparent 50%), radial-gradient(circle at 90% 0%, #4e4ed8 2%, transparent 50%)",
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
