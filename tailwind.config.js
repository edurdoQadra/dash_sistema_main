/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '100': '100',
        // Puedes agregar más valores negativos según sea necesario
      },
    },
  },
  plugins: [],
}