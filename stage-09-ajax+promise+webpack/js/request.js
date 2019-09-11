const axios = require('./axios.min.js');

export function axRequest1(config,success,failure){
    //1.创建axios的实例
    const instance = axios.create({
        baseURL : 'http://localhost:1688',
        timeout : 5000
    });

    //发送真正的网络请求
    instance(config)
        .then(res => {
            success(res);
        })
        .catch(err=>{
            failure(err);
        })
}

//改进
export function axRequest2(config) {
    //1.创建axios的实例
    const instance = axios.create({
        baseURL : 'http://192/168.0.1',
        timeout : 5000
    });

    //发送真正的网络请求
    instance(config.baseConfig)
        .then(res => {
            config.sucess(res);
        })
        .catch(err=>{
            config.failure(err);
        })
}

//改进
export function axRequest3(config) {
    return new Promise((resolve, reject) => {
        //1.创建axios的实例
        const instance = axios.create({
            baseURL : 'http://192/168.0.1',
            timeout : 5000
        });

        //发送真正的网络请求
        instance(config)
            .then(res => {
                resolve(res);
            })
            .catch(err=>{
                reject(err);
            })
    })
}

//最终版
export function axRequest4(config) {
    //1.创建axios的实例
    const instance = axios.create({
        baseURL : 'http://192/168.0.1',
        timeout : 5000
    });

    //2.拦截器的学习
    //2.1拦截请求 (成功,失败)
    axios.interceptors.request.use(config => {
        console.log(config);
        //请求拦截的作用?
        //1.比如config中的一些信息,不符合服务器的要求,我们可以在这里配置
        //2.每次发送请求时,都要显示一个loading  可以在这里进行
        //3.某些请求(比如token),必须要携带一些信息,可以做一个拦截
        return config;//一定要返回出去,要不请求拿不到config,会请求失败
    },err => {
        console.log(err);
    });
    //2.2拦截响应
    axios.interceptors.response.use(res => {
        console.log(res);
        return res.data; //拦截后,也需要返回出去,这里一般返回出去data数据就行
    },err => {

    });

    //3.发送真正的网络请求 因为instance的返回值就是promise
    return instance(config)
}
