import Taro from '@tarojs/taro';
import { HTTP_STATUS } from '../const/HttpStatus';

const rspInterceptor = (chain) => {
  const requestParams = chain.requestParams;

  return chain.proceed(requestParams).then((res) => {
    if (res.statusCode > 200 && res.statusCode < 300) {
      return Promise.reject('请求资源不存在');
    } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
      return Promise.reject('服务端出现了问题');
    } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
      Taro.setStorageSync('Authorization', '');
      // TODO 根据自身业务修改
      return Promise.reject('没有权限访问');
    } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
      Taro.setStorageSync('Authorization', '');
      return Promise.reject('需要鉴权');
    } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
      return res;
    }
  });
};

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。
const interceptors = [rspInterceptor];

export default interceptors;