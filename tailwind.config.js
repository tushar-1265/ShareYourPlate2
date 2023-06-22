/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "jost": ["Jost", "sans-serif"],
        "roboto": ["Roboto", "sans-serif"],
        "dancing-script": ['Dancing Script', 'cursive']
      },
    },
  },
  plugins: [],
}
