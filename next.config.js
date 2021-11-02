const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')

module.exports = withPlugins(
  [
    withSvgr,
    // other plugins here
  ],
  {
    images: {
      domains: ['images.ctfassets.net'],
    },
  }
)
