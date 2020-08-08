import Http from './Http'
export default function install(vue){
   let http=new Http()
   vue.prototype.request = http
}