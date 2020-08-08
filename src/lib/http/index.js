import Http from './Http'
export default function install(vue){
   vue.prototype.api = new Http()
}