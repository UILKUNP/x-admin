const apis = require.context("./modules", false, /\.js$/);
const api = {};
apis.keys().forEach(m => {
  let moduleName = m.replace(/(.*\/)*([^.]+).*/gi, "$2");
  console.log("自注册api", moduleName);
  api[moduleName] = apis(m);
});
export default function install(Vue) {
  Vue.prototype['$api']=api
}
