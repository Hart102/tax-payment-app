/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BgLight: "#F4F8F4",
        BgDark: "#E4F8FB",
        LightGray: "#757575",
        // Layer: "rgba(0, 0, 0, 0.9))",
      },
    },
  },
  plugins: [],
};
