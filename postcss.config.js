// config to only add prefixes and removing comments in production
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('tailwindcss'),
    process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
    process.env.NODE_ENV === 'production' ?
    cssnano({
      preset: 'default'
    }) :
    null,
    purgecss({
      content: ['./dist/**/*.html', './src/**/*.css', './src/**/*.js'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}