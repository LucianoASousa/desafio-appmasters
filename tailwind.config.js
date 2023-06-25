/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        sombra:
          '0 0 0 2px hsla(300, 99%, 67%, 0.1), -15px 0 30px -15px hsla(24, 100%, 50%, 0.52), 0 0 30px -15px hsla(322, 100%, 55%, 0.61), 15px 0 30px -15px hsla(250, 100%, 66%, 0.73)',
      },
      colors: {
        'gray-light': 'rgba(208, 233, 255, 0.60)',
        'gold-light': 'rgba(254, 255, 208, 0.60);',
      },
      gridTemplateColumns: {
        coluna: 'repeat(auto-fill, minmax(320px, 1fr))',
      },
    },
  },
  plugins: [],
}
