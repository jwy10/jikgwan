// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // app.use(
  //   createProxyMiddleware('/premier-league-tickets', {
  //     target: 'https://www.stubhub.ie',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/premier-league-tickets': '', // Remove the leading path
  //     },
  //   })
  // );
};
