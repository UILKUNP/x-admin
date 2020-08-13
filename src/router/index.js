import router from './router'
router.beforeEach((to, from, next) => {
    let APP_MENU_SETTIME = Number(localStorage.getItem('APP_MENU_SETTIME'));
    let timeOut = Number(new Date()) - APP_MENU_SETTIME;
    if (timeOut > 100000) {
        localStorage.removeItem('APP_TOKEN')
        localStorage.removeItem('APP_MENU_SETTIME')
        localStorage.removeItem('APP_MENU')
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
