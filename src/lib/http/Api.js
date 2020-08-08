import Http from './Http'
class Api extends Http {
    constructor (){
        super();
        // console.log(this)
    }
    //用户登录 GET /admin/user/login
    async login(username,password){
        return this.get({
            url:'/admin/user/login',
            data:{
              username,
              passwords:password
            },
            after:res=>{
              localStorage.setItem("mytoken", res.data.message);
              return res.data
            }
          })
    }
    // 获取路由 GET /admin/Permission/getRouteInfo
    async getRouteInfo(){
      return this.get({
          url:'/admin/Permission/getRouteInfo',
          after:res=>{
            return res.data
          }
        })
  }

}
export default function install(vue){
    vue.prototype.api = new Api()
 }


