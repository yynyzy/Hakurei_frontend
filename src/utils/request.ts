import axios from "axios";
import { isObject } from "./lang";
// import qs from 'qs';
// import Vue from '@/main';
// import message from 'ant-design-vue/es/message';
import VueAxios from '@@/plugins/VueAxios';

const BASE_URL = "https://localhost"
const baseConfig = {
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

const formatRequestConfig = (config: any) => {
  // 请求非 business API，不需要携带 cookie
  if (!config.ignoreTrimWhitespace) {
    config.data = trimWhitespace(config.data);
    config.params = trimWhitespace(config.params);
  }
  return config;
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

const formatResponseData = (response: any) => {
  return response.data;
};

// 创建 axios 实例
const service = axios.create(baseConfig);
service.interceptors.request.use(formatRequestConfig, err);
service.interceptors.response.use(formatResponseData, err);

const baseService = axios.create(baseConfig);
baseService.interceptors.request.use(formatRequestConfig, err);
baseService.interceptors.response.use(formatResponseData);

const installer = {
  install(vm: any) {
    vm.use(VueAxios, { service, baseService });
  },
};

export {
  installer as VueAxios,
  service as axios,
  baseService,
};
