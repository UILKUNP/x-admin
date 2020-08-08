import VueRouter from 'vue-router'
import Login from '../views/Login/index.vue'
const routes = [
  {
    path: '/login',
    name: 'Login',
      component: Login
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
