
//resolve,reject 本身又是一个函数
//一旦调用resolve,就会执行then里的代码

new Promise((resolve, reject)=>{
    // 第一次网络请求的代码
    setTimeout(()=>{
        resolve()
    },2000)
}).then(()=>{
    //第一次拿到结果的处理代码
    console.log('hello world');
    return new Promise((resolve,reject)=>{
        //第二次网络请求的代码
        setTimeout(()=>{
            resolve()
        },2000)
    })
}).then(()=>{
    //第二次拿到结果的处理代码
    console.log('hello vuejs');
    return new Promise((resolve, reject) => {
        //第三次网络请求的代码
        setTimeout(()=>{
            resolve()
        },2000)
    })
}).then(()=>{
    //第三次拿到结果的处理代码
    console.log('hello python');
});

//一般情况下,使用promise对这个异步操作进行封装
//new -> 构造函数(1,保存了一些状态信息,2.执行传入的函数)
//在执行传入的回调函数时,会传入两个参数,resolve,reject,本身又是函数

new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject('error message')
    },1000)
}).catch((err)=>{
    console.log(err);
});