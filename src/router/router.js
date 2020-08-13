import VueRouter from 'vue-router'
import getAsyncRoutes from './getAsyncRoutes'
import Login from '../views/Login/index.vue'
import Admin from '../views/Admin/index.vue'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    icon: null,
    meta: {
      useAuth: false,//标定是否需要权限校验
      name:"登陆"
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    icon: null,
    meta: {
      useAuth: true,//标定是否需要权限校验
      name:"后台管理"
    },
    children: [...getAsyncRoutes()]
  }
]
  
console.log(routes)
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
