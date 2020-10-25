import { MessageBox}from 'element-ui'
export class RequestError  {
  constructor(message) {
    message = message||' '
    MessageBox({
      title: '请求异常',
      message,
      type: 'warning'
    })
    return Promise.reject(message)
  }
}
export class ResponseError  {
  constructor(message) {
    message = message||' '
    MessageBox({
      title: '响应异常',
      message,
      type: 'warning'
    })
    return Promise.reject(message)
  }
}
export class ServeErrorDefault  {
  constructor(message) {
    message = message||'请求出现异常了，请联系管理员'
    MessageBox({
      title: '请求异常',
      message,
      type: 'warning'
    })
    return Promise.reject(message)
  }
}
