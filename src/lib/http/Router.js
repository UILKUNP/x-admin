import Http from './Http'
class Router extends Http {
    constructor() {
        super();
    }
    async getRouteInfo() {
        return this.get({
            url: '/admin/Permission/findPermissionByPage?page=1&limit=10',
            after: res => {
                return res.data
            }
        })
    }
  
}
export default function install(vue) {
    vue.prototype.router = new Router()
}


