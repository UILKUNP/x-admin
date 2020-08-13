import asyncComponte from "./asyncComponte"
export default function getAsyncRoutes(){
    let asyncRoutes = [];
    let data = JSON.parse(localStorage.getItem('APP_MENU'))
    let toTree = function (list) {
        let tree = new Array();
        let map = new Object();
        // 删除 所有 children,以防止多次调用
        list.forEach(function (item) {
            delete item.children;
        });
        // 将数据存储为 以 id 为 KEY 的 map 索引数据列
        list.forEach(function (item) {
            map[item['meta']['id']] = item;
        });
        list.forEach(function (item) {
            // 以当前遍历项，的pid,去map对象中找到索引的id
            let parent = map[item['meta']['parentId']];
            if (parent) {
                (parent.children || (parent.children = [])).push(item);
            } else {
                //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 tree结果集中，作为顶级
                tree.push(item);
            }
        });
        return tree;
    };
    if (data && data.length) {
        data.forEach(element => {
            asyncRoutes.push({
                path: '/' + element.menuCode,
                name: element.menuCode,
                component: asyncComponte(element.menuUrl), //Admin,// 
                icon: element.menuIcon,
                meta: {
                    id: element.id,
                    parentId: element.parentId,
                    useAuth: true,
                    name: element.name
                }
            })
        });    
    }
    //转换成树状图
    let meanTree = toTree(asyncRoutes) 
    return meanTree
}
