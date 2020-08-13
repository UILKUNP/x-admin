import { MessageBox}from 'element-ui'
import router from '../../router'
export class ServerError500 extends Error{
    constructor(message){
        message = message||'服务器异常'
        MessageBox({
            title: '提示',
            message,
            type: 'warning'
        })
        super(message);
    }
}
export class ServerError403 extends Error{
    constructor(message){
        message = message||'您没有登陆'
        MessageBox({
            title: '提示',
            message,
            type: 'warning'
        }).then(()=>{
            console.log("跳转路由") 
            router.replace('login')
        });
        super(message);
    }
}
export class RequestError extends Error{
    constructor(message){
        message = message||'您没有登陆'
        MessageBox({
            title: '提示',
            message,
            type: 'warning'
        })
        super(message);
    }
}
