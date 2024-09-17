/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        "5xl": ["2.75rem", "2.5rem"],
      },
    },
    fontFamily: {
      sans: [
        "Inter Variable",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    colors: {
      background: "#0D0D0D",
      white: "#FFFFFF",
      grey: "#212021",
      green: {
        neon: "#00FF26",
        bright: "#21E31D",
      },
      cyan: "#17A79A",
      purple: {
        dark: "#39227F",
        light: "#906DFD",
        bright: "#B59DFF",
      },
      transparent: "transparent",
      current: "currentColor",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
