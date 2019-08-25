const postcssPresetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')
const postcssPxToViewport = require('postcss-px-to-viewport')
const stylelint = require("stylelint")
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    stylelint(),
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true
      },
    }),
    cssnano({
      preset: ['default', {
      }]
    }),
    tailwindcss,
    postcssPxToViewport({
      viewportWidth: 1920 * 5,
      unitToConvert: 'PX'
    }),
  ]
}
