module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname:'/**'
      },
      {
        protocol: 'https',
        hostname: 'sfmoe.dev',
        port: '',
        pathname:'/**'
      }
    ]
  }
}
