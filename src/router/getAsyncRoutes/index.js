import asyncComponte from "./asyncComponte"
export default function getAsyncRoutes(){
    let asyncRoutes = [];
    let data = JSON.parse(localStorage.getItem('APP_MENU'))
    if (data && data.length) {
        data.forEach(element => {
            asyncRoutes.push({
                path: '/' + element.menuCode,
                name: element.menuCode,
                component: asyncComponte(element.menuUrl), //Admin,// 
                icon: element.menuIcon,
                meta: {
                    useAuth: true,
                    name: element.name
                }
            })
        });
    }
    return asyncRoutes
}
