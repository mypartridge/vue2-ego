const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

// 配置参数devServer.proxy
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8989',
                ws: true,
                changeOrigin: true,
                pathRewrite: { //重写路径
                    '^/foo': ''
                }
            }
        },
        // disableHostCheck: true,
        // host: "xxx.com",
        // port: 8080,
        // https: false,
        // host:'192.168.1.100',

    }
}