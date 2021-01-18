const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function (app) {
    app.use("/api", createProxyMiddleware({target: 'https://airport-course-work.herokuapp.com', secure: false, changeOrigin: true}));
};