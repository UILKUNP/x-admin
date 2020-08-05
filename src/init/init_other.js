import Vue from 'vue'
export default (...modules)=>{
    modules.forEach(module => {
        Vue.use(module)
    });
}