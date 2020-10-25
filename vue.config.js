const WebpackAutoIconfontPlugin =require("./webpackPlugins/webpack-auto-iconfont-plugin")
const path = require('path')
module.exports = {
  lintOnSave: "warning",
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
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
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = "基层呼吸系统疾病早期筛查干预能力提升项目---运营后台";
        return args;
      })
  },
  configureWebpack: {
    plugins: [
      new WebpackAutoIconfontPlugin(path.resolve(__dirname, './src/assets/iconfont/iconfont.less'),'http://at.alicdn.com/t/font_2054199_8do6l1xjtmf.css')
    ],
    resolve: {
      alias: {
        "@": path.resolve("src"),
        "@com": path.resolve("src/components"),
        "@err": path.resolve("src/lib/Error"),
        "@tools": path.resolve("src/lib/Tools"),
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, "src/assets/less/index.less")
      ]
    }
  }
};