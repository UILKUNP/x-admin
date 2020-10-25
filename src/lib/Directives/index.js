// let driectiveHooks = {
//     bind: function (el, binding, vnode) { },
//     inserted: function (el, binding, vnode) { },
//     update: function (el, binding, vnode) { },
//     componentUpdated: function (el, binding, vnode) { },
//     unbind: function (el, binding, vnode) { },
// }
export default function install(Vue) {
  Vue.directive('custom-directive', {
    bind: function (el, binding) {
      console.log(el, binding)
    }
  })
}