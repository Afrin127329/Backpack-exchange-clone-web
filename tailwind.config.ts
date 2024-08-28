import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        redText: "rgb(253 75 78)",
        blueText: "rgb(76 148 255)",
        greenText: "rgb(0 194 120)",
        btnPrimary: "rgb(20 21 27)",
        baseTextHighEmphasis: "rgb(244 244 246)",
        baseTextMedEmphasis: "rgb(150 159 175)",
        baseTextLowEmphasis: "rgb(117 121 138)",
        baseBorderLight: "rgb(32 33 39)",
        baseBackgroundL0: "rgb(14 15 20)",
        baseBackgroundL2: "rgb(32 33 39)",
        baseBackgroundL3: "rgb(56 58 69)",
        greenBgTransparent: "rgba(0,194,120,.08)",
      },
      border: {},
    },
  },
  plugins: [],
};
export default config;
