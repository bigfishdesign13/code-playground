import { defineConfig, defineGlobalStyles } from "@pandacss/dev";
// import { layerStyles } from "./src/sharedStyles/layerStyles";

const primatives = {
  colors: {
    gray: {
      "950": "#0D0D0D",
      "900": "#191919",
      "800": "#333333",
      "700": "#4C4C4C",
      "600": "#666666",
      "500": "#7F7F7F",
      "400": "#999999",
      "300": "#B2B2B2",
      "200": "#CCCCCC",
      "100": "#E5E5E5",
      "50": "#F2F2F2",
      "25": "#F9F9F9",
    },
    "gray-cool": {
      "950": "#0B0C0D",
      "900": "#17181A",
      "800": "#2D3034",
      "700": "#44494E",
      "600": "#5B6168",
      "500": "#727981",
      "400": "#8E949A",
      "300": "#AAAFB3",
      "200": "#C7C9CD",
      "100": "#E3E4E6",
      "50": "#F1F2F2",
      "25": "#F8F8F9",
    },
    "gray-warm": {
      "950": "#0D0C0C",
      "900": "#1A1818",
      "800": "#343130",
      "700": "#4E4948",
      "600": "#676261",
      "500": "#817A79",
      "400": "#9A9594",
      "300": "#B3AFAF",
      "200": "#CDCAC9",
      "100": "#E6E4E4",
      "50": "#F2F2F2",
      "25": "#F9F8F8",
    },
    "dusk-blue": {
      "950": "#04080E",
      "900": "#08111C",
      "800": "#102236",
      "700": "#193350",
      "600": "#23446A",
      "500": "#2E5582",
      "400": "#58779B",
      "300": "#8299B4",
      "200": "#ABBBCD",
      "100": "#D5DDE6",
      "50": "#EAEEF3",
      "25": "#F5F7F9",
    },
    "rich-gold": {
      "950": "#120800",
      "900": "#251000",
      "800": "#482100",
      "700": "#693200",
      "600": "#894203",
      "500": "#A85307",
      "400": "#B97539",
      "300": "#CB986A",
      "200": "#DCBA9C",
      "100": "#EEDDCD",
      "50": "#F6EEE6",
      "25": "#FBF6F3",
    },
  },
};

const globalCss = defineGlobalStyles({
  "html, body": {
    backgroundAttachment: "fixed",
    backgroundColor: "surface.page",
    backgroundSize: "cover",
    backgroundImage: "url(/background.png)",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    color: "text",
    fontFamily: "var(--font-barlow)",
    fontSize: "16px",
    lineHeight: "1.5",
  },
  h1: {
    color: "text.loud",
    fontFamily: "var(--font-irish-grover)",
    fontSize: "4rem",
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Global styles
  globalCss,

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      tokens: {
        colors: {
          surface: {
            page: { value: primatives.colors["gray-cool"][950] },
            primary: { value: primatives.colors["gray-cool"][900] },
            secondary: { value: primatives.colors["gray-cool"][800] },
            fade: { value: `${primatives.colors["gray-cool"][900]}/80` },
          },
          text: {
            DEFAULT: { value: primatives.colors["gray-warm"][200] },
            loud: { value: primatives.colors["gray-warm"][100] },
            quiet: { value: primatives.colors["gray-warm"][300] },
          },
          border: {
            DEFAULT: { value: primatives.colors["gray-cool"][400] },
            loud: { value: primatives.colors["gray-cool"][200] },
            quiet: { value: primatives.colors["gray-cool"][500] },
            subtle: { value: primatives.colors["gray-cool"][800] },
          },
          formElement: {
            DEFAULT: { value: primatives.colors["rich-gold"][500] },
            loud: { value: primatives.colors["rich-gold"][400] },
            quiet: { value: primatives.colors["rich-gold"][600] },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
