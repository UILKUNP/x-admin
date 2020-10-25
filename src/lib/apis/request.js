import NProgress from "nprogress";
import {RequestError, ResponseError} from '../Error'
import responseFailHook from "./responseFailHook";
import axios from "axios";
const baseURL = process.env.VUE_APP_BASE_URL
const timeout = 80 * 1000;
const request = axios.create({
  baseURL,
  timeout
});
/**
 * 局部请求前钩子 参数校验应该在这里
 * @param config
 * @returns {{axios.config}}
 */
const beforeHook = config => {
  const defaultBeforeHook = config => config;
  config.before = config.before || defaultBeforeHook;
  return config.before(config);
};
/**
 * 局部请求后钩子 响应数据处理应该放在这里
 * @param config
 * @returns {{axios.response}}
 */
const afterHook = res => {
  const defaultAfterHook = res => res;
  res.config.after = res.config.after || defaultAfterHook;
  return res.config.after(res);
};
request.interceptors.request.use(
  config => {
    NProgress.start()
    config = beforeHook(config);
    return config;
  },
  error => {
    NProgress.done();
    return new RequestError(error);
  }
);
request.interceptors.response.use(
  res => {
    NProgress.done();
    res = afterHook(res);
    return responseFailHook(res);
  },
  error => {
    NProgress.done();
    return new ResponseError(error);
  }
);
export default request;
