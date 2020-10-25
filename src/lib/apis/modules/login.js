///
import request from "../request"
export const login = ( password,
  username) => request({
  url: "/admin/auth/login",
  method: "post",
  data:{
    password,
    username
  },
  before: ctx => {
    return ctx;
  },
  after: res => {
    // console.log("局部response拦截测试", res);
    return res
  }
});
