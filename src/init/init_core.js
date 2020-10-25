import Vue from 'vue'
import App from '../App.vue'
export default (router) => {
  new Vue({
    ...router,
    render: h => h(App)
  }).$mount('#app')
}