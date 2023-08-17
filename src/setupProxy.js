const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/client",
        createProxyMiddleware({
            target: "https://api.cloudflare.com",
            changeOrigin: true,
        })
    );
};
