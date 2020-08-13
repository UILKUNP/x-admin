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
              // console.log(res)
              localStorage.setItem("APP_TOKEN", res.data.message);
              return res.data
            }
          })
    }
    // 获取路由 GET /admin/Permission/getRouteInfo
    async setRouteInfo(page){
      return this.get({
          url:'/admin/Permission/getRouteInfo',
          after:res=>{
            let data = res.data.data;
            let routes=[];
            localStorage.setItem("APP_MENU", JSON.stringify(data) );
            localStorage.setItem("APP_MENU_SETTIME", Number(new Date()) );
            let routeUrl = page.$router.resolve({
              path: "/admin"
            });
            window.open(routeUrl.href, '_blank');
            return routes
          }
        })
  }
  async setRouterLocal(){
    if (!localStorage.getItem("APP_TOKEN")){
      return
    }else{
      return this.get({
        url: '/admin/Permission/getRouteInfo',
        after: res => {
          let data = res.data.data;
          localStorage.setItem("APP_MENU", JSON.stringify(data));
          localStorage.setItem("APP_MENU_SETTIME", Number(new Date()));
          return
        }
      })
    }
    
  }
}
export default function install(vue){
    vue.prototype.api = new Api()
 }


