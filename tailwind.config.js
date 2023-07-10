/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
   screens: {
    xs: "320px",
   },
   colors: {
    "accent-1": "#333",
    primary: "rgb(var(--color-primary) / <alpha-value>)",
    secondary: "rgb(var(--color-secondary) / <alpha-value>)",
    tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
    background: "rgb(var(--background-rgb) / <alpha-value>)",
   },
   keyframes: {
    blinker: {
     from: {
      visibility: "hidden",
      color: "#ffff",
     },
     to: {
      color: "#424242",
      visibility: "visible",
      "background-color": "transparent",
     },
    },
   },
   animation: {
    blinker: "blinker 1s linear infinite",
   },
  },
 },
 plugins: [],
};
