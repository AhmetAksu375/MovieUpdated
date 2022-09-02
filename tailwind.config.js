/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  plugins: [require("daisyui"),require('tw-elements/dist/plugin'),require('flowbite/plugin')],
  theme: {
    extend: {},
  },
}