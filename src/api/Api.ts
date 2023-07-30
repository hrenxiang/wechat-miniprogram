import Taro from '@tarojs/taro';
import interceptors from './interceptor/ResponseInterceptor';

const DEFAULT_TIMEOUT = 10000; // 默认请求超时时间（单位：毫秒）

type RequestMethod = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'TRACE' | 'CONNECT';

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

// 封装通用请求方法
async function request<T = any>(url: string, method: RequestMethod, data?: any, header?: TaroGeneral.IAnyObject, noLoading = false): Promise<T> {
  if (!noLoading) {
    Taro.showLoading({
      title: '加载中',
    });
  }

  const options: Taro.request.Option = {
    url: `${url}`,
    method: method,
    data: data,
    header: {
      'content-type': 'application/json',
      ...header,
    },
    timeout: DEFAULT_TIMEOUT,
  };

  try {
    const response = await Taro.request<T>(options);
    setTimeout(() => {
      Taro.hideLoading();
    }, 100);

    return response.data;
  } catch (error) {
    Taro.hideLoading();
    handleError(error);
    throw error;
  }
}

// 封装 GET 请求
export async function get<T = any>(url: string, data?: any, header?: TaroGeneral.IAnyObject, noLoading = false): Promise<T> {
  return request<T>(url, 'GET', data, header, noLoading);
}

// 封装 POST 请求
export async function post<T = any>(url: string, data?: any, header?: TaroGeneral.IAnyObject, noLoading = false): Promise<T> {
  return request<T>(url, 'POST', data, header, noLoading);
}

// 封装 PUT 请求
export async function put<T = any>(url: string, data?: any, header?: TaroGeneral.IAnyObject, noLoading = false): Promise<T> {
  return request<T>(url, 'PUT', data, header, noLoading);
}

// 错误处理函数
function handleError(error: any) {
  // 可根据需要在此处理错误，例如弹窗提示、打印错误信息等
  console.error('Request Error:', error);
}
