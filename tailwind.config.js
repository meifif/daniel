// Add RTL plugin to tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fee2e2',
          100: '#fecaca',
          200: '#fca5a5',
          300: '#f87171',
          400: '#ef4444',
          500: '#dc2626', // Main red
          600: '#c71f1f', // Darker red
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7', // Main purple
          600: '#9333ea', // Darker purple
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        dark: '#1a1a1a',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #dc2626, #7e22ce)',
      },
    },
  },
  plugins: [require('tailwindcss-rtl')],
}