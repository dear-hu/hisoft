module.exports = {
    runtimeCompiler: true,
    publicPath: '/', // 设置打包文件相对路径
    devServer: {
        // open: process.platform === 'darwin',
        // host: 'localhost',
        port: 8888,//服务器项目运行端口
        open: true, //配置自动启动浏览器
        proxy: {
            '/api': {
                target: 'https://unidemo.dcloud.net.cn', //自己本地服务器接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {
        externals: {
            "BMap": "BMap"
        }
    }
}
