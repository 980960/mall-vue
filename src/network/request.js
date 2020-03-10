import axios from 'axios'
export function request(config) {
    //1.创建axios实例
    const instance1 = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    //2.axios的拦截器
    //请求拦截
    instance1.interceptors.request.use(config => {
        // window.console.log(config);
        return config
    }, err => {
        window.console.log(err);
    })
    //响应拦截
    instance1.interceptors.response.use(res => {
         window.console.log(res.data);
        return res.data
    }, err => {
        window.console.log(err);
    })
    //3.发送真正的网络请求
    return instance1(config)
}