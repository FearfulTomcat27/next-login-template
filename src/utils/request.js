import axios from "axios";
import moment from "moment";
import { toast } from "sonner";

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么

    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    // 解析并返回数据。
    const res = response.data;
    if (res.code !== 200) {
      toast.error(res.message);
    }
    return res;
  },
  (error) => {
    // 报错并弹窗提示
    toast.error(error.message);
    return Promise.reject(error);
  }
);

export default request;
