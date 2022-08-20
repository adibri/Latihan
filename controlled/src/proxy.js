const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware('/api', {
  target: 'https://pokeapi.co/api/v2/',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '',
  },
});

export default apiProxy;
