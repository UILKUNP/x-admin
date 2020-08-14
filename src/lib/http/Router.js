import Http from './Http'
class Router extends Http {
    constructor() {
        super();
    }
    async getRouteInfo(page,
        limit=1) {
        return this.get({
            url: '/admin/Permission/findPermissionByPage',
            data:{
                page,
                limit
            },
            after: res => {
                return res.data
            }
        })
    }
    async delPermission(ids=new String()) {
        return this.get({
            url: '/admin/Permission/delPermission',
            data:{
                ids
            },
            after: res => {
                
                return res.data
            }
        })
    }
  
}
export default function install(vue) {
    vue.prototype.router = new Router()
}


