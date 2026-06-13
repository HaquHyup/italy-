import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#22211f",
        espresso: "#3b2a22",
        terracotta: "#b8643f",
        basil: "#426b50",
        marble: "#f7f4ef",
        limone: "#e9c95a",
        sea: "#2e6f7e"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(48, 36, 27, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
