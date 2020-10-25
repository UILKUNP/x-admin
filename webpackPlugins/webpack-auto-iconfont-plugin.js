const request = require('request');
const fs = require('fs');
class WebpackAutoIconfontPlugin {
  constructor(lessPath, iconfontPath) {
    this.lessPath = lessPath
    this.iconfontPath = iconfontPath
  }
  apply(compiler) {
    compiler.hooks.entryOption.tap('WebpackAutoIconfontPlugin', stats => {
      let path=this.lessPath;
      let iconfontPath=this.iconfontPath;
      request(iconfontPath, function (error, response, body) {
        if (!error &&response.statusCode == 200) {
          let iconfont=body+`i{.iconfont;}`;
          let file=fs.openSync(path, 'w');
          fs.writeSync(file, iconfont, 0, 'utf-8')
          fs.closeSync(file)
          console.log('写入iconfont成功');
        }
      });
    })
  }
}
module.exports = WebpackAutoIconfontPlugin