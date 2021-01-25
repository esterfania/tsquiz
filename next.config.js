module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/quiz',
          permanent: false,
        },
      ]
    },
  }