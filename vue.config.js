module.exports = {
    devServer: {
        //https://api.github.com/proxyServer/======>http://localhost:8080/proxyServer/
        //pathRewrite :   '^/proxyServer' ======> ''
        //https://api.github.com/======>http://localhost:8080/proxyServer
        // proxy: {
        //     "/proxyServer": {
        //         target: "https://api.github.com/",
        //         changeOrigin: true,
        //         secure:true,//https
        //         pathRewrite:{
        //             '^/proxyServer':''
        //         }
        //     }
        // }
    }
};