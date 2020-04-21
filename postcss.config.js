// config to only add prefixes and removing comments in production
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
    process.env.NODE_ENV === 'production' ?
    cssnano({
      preset: 'default'
    }) :
    null,
    purgecss({
      content: ['./src/**/*.html', './src/**/*.css', './src/**/*.pcss', './src/**/*.js'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}