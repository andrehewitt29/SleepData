const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/subscribe',{
            target:'http://localhost:8080'
    })
    );
};
