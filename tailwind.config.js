module.exports = {
  darkMode: 'class',
  content: ["./src/*.html","./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
