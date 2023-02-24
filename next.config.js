/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    })

    return config
  },
  reactStrictMode: true,
  images: {
    domains: [
      'files.stripe.com'
    ]
  }
}

module.exports = nextConfig
