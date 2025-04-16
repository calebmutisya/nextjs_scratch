/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        screens: {
          'sm': '640 px',     // override default '640px'
          'md': '768px',     // override default '768px'
          // add custom breakpoints
          '3xl': '1920px',
        },
      },
    },
    plugins: [],
}
  