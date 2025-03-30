/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('https://i.imgur.com/D2jFlnO.jpg')",
      },
      minHeight: {
        screen: '100vh',
      },
    },
  },
  plugins: [],
} 