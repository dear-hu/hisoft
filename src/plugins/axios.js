
import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.defaults.timeout = 10000; //设置请求时间
//axios.defaults.baseURL = baseUrl;//设置默认接口地址


//http request 封装请求头拦截器
axios.interceptors.request.use(config => {
    // console.log("request")
    // console.log(config)

    //请求方式
    let method = config.method.toLowerCase();
    if (method === 'get' || method === 'delete') {
        Object.assign(config.params, {
            "test": "testVAl"
        });
    }
    return config;
}, error => {
    return Promise.reject(err);
});

//http response 封装后台返回拦截器
axios.interceptors.response.use(response => {
    console.log(response)

//当返回信息为未登录或者登录失效的时候重定向为登录页面
    //   if (response.data.code == 'W_100004' || response.data.message == '用户未登录或登录超时，请登录！') {
    //     router.push({
    //       path: "/",
    //       querry: {
    //         redirect: router.currentRoute.fullPath
    //       } //从哪个页面跳转
    //     })
    //   }
    if (typeof response.data === 'string') {
        return JSON.parse(response.data);
    } else {
        return response;
    }
}, error => {
    return Promise.reject(error)
});




/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.post(url,data)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}

