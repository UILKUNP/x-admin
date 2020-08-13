/*
 * @Author: 刘鲲鹏
 * @Date: 2020-07-24 19:34:37
 * @Last Modified by: 刘鲲鹏
 * @Last Modified time: 2020-08-13 11:00:48
 */
import axios from 'axios'
// import { Message } from 'element-ui'
import { ServerError500, ServerError403,RequestError} from '../Error'
export default class Http {
    BASEURL =process.env.VUE_APP_BASE_URL;
    constructor() { }
    async get(ctx) {
        try {
            ctx.url = this.BASEURL + ctx.url
            //get的请求的参数用params接受
            ctx.params = ctx.data
            delete ctx.data
            ctx.method = 'get'
            ctx.headers = {
                Accept: 'application/json',
                ...ctx.headers,
            }
            ctx.timeout=2000
            ctx.before = ctx.before || ((ctx) => ctx) //局部请求拦截器
            ctx.after = ctx.after || ((ctx) => ctx) //局部响应拦截器
            ctx.errorCatch = ctx.errorCatch || ((err) => err) //局部异常拦截器拦截
            ctx = this.globalCatchRequest(ctx) //请求前通过全局请求拦截器
            ctx = ctx.before(ctx)
            let res = await axios.request(ctx)
            let resByGlo = this.globalCatch(res) //全局拦截后的res
            let resFinal = ctx.after(resByGlo)
            return resFinal
        } catch (err) {
            let errBylocal = ctx.errorCatch(err)
            //局部拦截后的res
            let errByGlo = this.globalErrorCatch(errBylocal)
            return Promise.reject(errByGlo)
            //全局拦截后的res;
        }
    }
    async post(ctx) {
        try {
            ctx.url = this.BASEURL + ctx.url
            ctx.method = 'POST'

            ctx.headers = {
                Accept: "application/json",
          
                ...ctx.headers,
            }
            ctx.timeout = 2000
            ctx.before = ctx.before || ((ctx) => ctx) //局部请求拦截器
            ctx.after = ctx.after || ((ctx) => ctx) //局部响应拦截器
            ctx.errorCatch = ctx.errorCatch || ((err) => err) //局部异常拦截器拦截
            ctx = this.globalCatchRequest(ctx) //请求前通过全局请求拦截器
            ctx = ctx.before(ctx)
            let res = await axios.request(ctx)
            let resByGlo = this.globalCatch(res) //全局拦截后的res
            let resFinal = ctx.after(resByGlo)
            return resFinal
        } catch (err) {
            let errBylocal = ctx.errorCatch(err)
            //局部拦截后的res
            let errByGlo = this.globalErrorCatch(errBylocal)
            return Promise.reject(errByGlo)
            //全局拦截后的res;
        }
    }
    globalErrorCatch(err) {
        console.warn(err)
        throw new RequestError(err)
    }
    globalCatch(res) {
        let code = res.data.code;
        let message = res.data.message;
        switch (code) {
            case 200:
                return res
                // break;
            case 500:
                throw new ServerError500(message)
                // break;
            case 403:
                throw new ServerError403()
                // break;
            default:
                break
               
        }
        return res
    }
    globalCatchRequest(ctx) {
        //对请求前的内容处理，返回处理后的内容
        let token = localStorage.getItem('APP_TOKEN') || ''
        if(token){
            ctx.headers['token'] = token
        }
        //请求拦截器
        return ctx
    }
}
