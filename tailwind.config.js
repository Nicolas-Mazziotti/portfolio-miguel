/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Silkscreen', 'serif'], 
      },
        backgroundImage: {
          'hero-pattern': "url('/assets/header-image-wbg.png')",
          'footer-texture': "url('/img/footer-texture.png')",
        }
    },
  },
  plugins: [],
}

