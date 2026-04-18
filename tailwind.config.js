/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:   "#2C5A85",   /* AI, CTAs, iconen */
          dark:      "#1A3A57",   /* hover, donkere accenten */
          secondary: "#6C7B8B",   /* doption, body text */
          light:     "#4A7DAD",   /* lichte tint primary */
          muted:     "#9BBCD8",   /* zeer licht, op donkere achtergrond */
          bg:        "#F8F9FA",   /* pagina achtergrond */
        },
        slate: {
          50:  "#F8F9FA",
          100: "#F1F3F5",
          200: "#E2E6EA",
          300: "#CDD3D9",
          400: "#9BA8B5",
          500: "#6C7B8B",
          600: "#4E5D6C",
          700: "#364352",
          800: "#1E2D3D",
          900: "#0F1A26",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};
