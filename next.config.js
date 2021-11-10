const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
}

module.exports = withPlugins(
  [
    withSvgr,
    // other plugins here
  ],
  nextConfig
)
