module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '80',
        pathname:'/**'
      },
      {
        protocol: 'https',
        hostname: 'sfmoe.dev',
        port: '80',
        pathname:'/**'
      }
    ]
  }
}
