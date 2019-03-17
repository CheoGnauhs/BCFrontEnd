module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      },
      '/rails': {
        target: 'http://localhost:3000'
      }
    }
  }
}