const path=require('path')
module.exports = {
    devServer: {
        //https://api.github.com/proxyServer/======>http://localhost:8080/proxyServer/
        //pathRewrite :   '^/proxyServer' ======> ''
        //https://api.github.com/======>http://localhost:8080/proxyServer
        // proxy: {
        //     "/proxyServer": {
        //         target: "http://192.168.100.3:9999/",
        //         changeOrigin: true,
        //         secure:true,//https
        //         pathRewrite:{
        //             '^/proxyServer':''
        //         }
        //     }
        // }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, "src/assets/less/flex.less"), path.resolve(__dirname, "src/assets/less/reset.less")] // 引入全局样式变量
        }
    }
};