/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {},
    container: {
      center: true
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1140px'
    },
    colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'main': '#54ACD2',
      'blue': '#227FD6'
    }
  },
  plugins: []
}
