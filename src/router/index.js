import VueRouter from 'vue-router'
import Login from '../views/Login'
const routes = [
  {
    path: '/login',
    name: 'Login',
      component: Login
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
