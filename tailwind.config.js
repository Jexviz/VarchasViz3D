/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"], // Tells Tailwind to scan your HTML and JS files
  safelist: [
    "md:col-span-4",
    "md:col-span-5",
    "md:col-span-6",
    "md:col-span-7",
    "md:col-span-8",
    "md:col-span-12",
    "md:row-span-1",
    "md:row-span-2",
  ],
  theme: {
    extend: {
      colors: {
        primary: { dark: "#0D0D0D", light: "#F4F4F4" },
        accent: "#262626",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};
