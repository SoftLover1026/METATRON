// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: function() {
        return [
          require('tailwindcss'),
          require('autoprefixer'),
        ]
      }
    },
  },
}