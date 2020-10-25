import request from "../request"
export const list = () => request({
  url: "/",
  method: "get",
  before: ctx => {
    console.log("局部request拦截测试", ctx);
    return ctx;
  },
  after: res => {
    console.log("局部response拦截测试", res);
  }
});
