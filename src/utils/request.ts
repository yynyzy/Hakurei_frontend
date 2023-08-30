import axios , { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig }from "axios";
import { isObject } from "./lang";
// import qs from 'qs';
// import message from 'ant-design-vue/es/message';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $http: AxiosInstance;
  }
}

const BASE_URL = "https://localhost"; // 默认 url
const baseConfig: AxiosRequestConfig = {
  baseURL: setBaseUrl(),
  timeout: 20000,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  // paramsSerializer: (params: any) => qs.stringify(params, { arrayFormat: 'brackets', allowDots: true }),
};

function setBaseUrl() {
// 此处可根据 环境 配置不同 baseUrl
  return BASE_URL;
}
const formatRequestConfig = (config: InternalAxiosRequestConfig) => {
  // if (config.ignoreTrimWhitespace) {
  //   config.data = trimWhitespace(config.data);
  //   config.params = trimWhitespace(config.params);
  // }
  return config;
};

const formatResponseData = (response: AxiosResponse) => {
  // 响应拦截器
  return response.data;
};

const trimWhitespace = (data: any) => {
  if (!data || !isObject(data)) { return data; }
  const text = JSON.stringify(data, (key, value) => {
    if (typeof (value) === 'string') {
      return value.trim();
    }
    return value;
  });
  return JSON.parse(text);
};

const err = ({ response }: { response: any}) => {
  if (!response) {
    // message.error('networkError');
  } else {
    const { status } = response;
    switch (status) {
      case 429:
        break;
      case 403:
        break;
      case 401:
        break;
      case 400:
        break;
      default:
        break;
    }
  }
  return Promise.reject(response);
};
// 创建携带 baseUrl 的 axios 实例
const service = axios.create(baseConfig);
service.interceptors.request.use(formatRequestConfig, err);
service.interceptors.response.use(formatResponseData, err);

// 创建一个初始 axios
const baseService = axios.create({
  baseURL: '',
  timeout: 20000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  // paramsSerializer: (params: any) => qs.stringify(params, { arrayFormat: 'brackets', allowDots: true }),
});
baseService.interceptors.request.use(formatRequestConfig, err);
baseService.interceptors.response.use(formatResponseData, err);

const installer = {
  install(vm: any) {
    vm.config.globalProperties.$http = baseService;
    vm.config.globalProperties.$axios = service;
  },
};

export {
  installer as VueAxios,
  service as axios,
};
