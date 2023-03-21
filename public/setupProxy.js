const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        createProxyMiddleware("https://engine.hotellook.com/", {
            target: "https://engine.hotellook.com/",
            secure: false,
            changeOrigin: true,
        })
    );
}