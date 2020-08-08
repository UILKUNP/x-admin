import Vue from 'vue'
import App from '../App.vue'
export default (router)=>{
    Vue.prototype.http = new Object();
    new Vue({
        ...router,
        render: h => h(App)
    }).$mount('#app')
}