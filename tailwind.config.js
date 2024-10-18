/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      rotate: {
        '6': '6deg',
        '17': '17deg',
        '25': '25deg',
        '28': '28deg',
        '53': '53deg',
        '55': '55deg',
        '56': '56deg',
        '71': '71deg',
      }
    },
  },
  plugins: [],
};
