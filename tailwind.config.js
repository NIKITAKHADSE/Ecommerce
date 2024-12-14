/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',            // Ensure the path starts with './'
    './src/**/*.{js,ts,jsx,tsx}',     // Corrected path for all HTML and JS files in 'src'
  ],
  theme: {
    extend: {
      colors:{
        Primary:'#000'
      },
      backgroundColor:{
        Primary:'azure'
      }
    },
  },
  plugins: [],
}
