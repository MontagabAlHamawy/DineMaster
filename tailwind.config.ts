import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      xl: "1024px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1a2744",
        accent: {
          DEFAULT: "#1d4ed8",
          hover: "#1d4ec8",
        },
        body: "#111827",
        section: "#1e293b",
        sidebar: "#1f2937",
        text:'#6b7280'
      },
    },
  },
  plugins: [],
};
export default config;
