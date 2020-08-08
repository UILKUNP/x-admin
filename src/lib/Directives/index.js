// let driectiveHooks = {
//     bind: function (el, binding, vnode) { },
//     inserted: function (el, binding, vnode) { },
//     update: function (el, binding, vnode) { },
//     componentUpdated: function (el, binding, vnode) { },
//     unbind: function (el, binding, vnode) { },
// }
export default function install(Vue) {
    Vue.directive('margin-top', {
        bind: function (el, binding) {
            // console.log(el,binding)
            el.style.marginTop = binding.value;

        }
    })
}