const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(function({addVariant, e}) {
      let variantName = 'animated';
      addVariant(variantName, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`${variantName}${separator}${className}`)}`
        })
      })
    })
  ],
}
