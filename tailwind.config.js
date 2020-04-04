const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    fontFamily: {
      display: ['Varela', 'sans-serif'],
      body: ['Varela', 'sans-serif']
    },
    extend: {
      colors: {
        darksmoke: {
          90: 'rgba(0, 0, 0, 0.9)',
          75: 'rgba(0, 0, 0, 0.75)',
          60: 'rgba(0, 0, 0, 0.6)',
          50: 'rgba(0, 0, 0, 0.5)',
          40: 'rgba(0, 0, 0, 0.4)',
          25: 'rgba(0, 0, 0, 0.25)',
          10: 'rgba(0, 0, 0, 0.1)'
        },
        lightsmoke: {
          90: 'rgba(255, 255, 255, 0.9)',
          75: 'rgba(255, 255, 255, 0.75)',
          60: 'rgba(255, 255, 255, 0.6)',
          50: 'rgba(255, 255, 255, 0.5)',
          40: 'rgba(255, 255, 255, 0.4)',
          25: 'rgba(255, 255, 255, 0.25)',
          10: 'rgba(255, 255, 255, 0.1)'

        }
      },
    }
  },
  variants: {},
  plugins: [
    plugin(function ({
      addVariant,
      e
    }) {
      let variantName = 'animated';
      addVariant(variantName, ({
        modifySelectors,
        separator
      }) => {
        modifySelectors(({
          className
        }) => {
          return `.${e(`${variantName}${separator}${className}`)}`
        })
      })
    })
  ]
}