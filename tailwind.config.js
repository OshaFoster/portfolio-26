/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        absans: ['Absans', 'sans-serif'],
        clash: ['ClashDisplay', 'sans-serif'],
        rebeqa: ['Rebeqa', 'sans-serif'],
      },
      colors: {
        accent: '#2563eb',
      },
    },
  },
  plugins: [],
}
