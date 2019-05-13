const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // loaclhost:3000/api/ajax/xxx -----> 
  // http://m.maoyan.com/api/ajax/xxx
  app.use(proxy('/ajax', { 
    target: 'http://m.maoyan.com', //这是需要代理的请求地址
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  }));
};
