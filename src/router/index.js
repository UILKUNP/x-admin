import router from './router'
import Vue from 'vue'
const _this = new Vue()
router.beforeEach(async (to, from, next) => {
    console.log(to, from)
    let APP_MENU_SETTIME = Number(localStorage.getItem('APP_MENU_SETTIME'));
    let timeOut = Number(new Date()) - APP_MENU_SETTIME;
    if (timeOut > 100) {
        localStorage.removeItem('APP_MENU_SETTIME')
        localStorage.removeItem('APP_MENU');
        if(to.name!='login')
        await _this.api.setRouterLocal()
    }
    if (!localStorage.getItem('APP_TOKEN')) {

        if (
            to.matched.length > 0 &&
            !to.matched.some(record => record.meta.useAuth)
        ) {
            next()
        } else {
            next({ name: 'login' })
        }
    } else {
        next()
    }
})
export default router
