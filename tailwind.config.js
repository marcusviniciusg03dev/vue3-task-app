/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    './src/pages/*.vue',
    './src/*.vue',
  ],
  theme: {
    extend: {}
  },
  plugins: [],
}
