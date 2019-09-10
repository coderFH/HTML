Promise.all([
    new Promise((resolve, reject) => {
        //网络请求
        setTimeout(()=>{
            resolve('我是返回的数据1')
        },1000)
    }),
    new Promise((resolve, reject) => {
        //网络请求
        setTimeout(()=>{
            resolve('我是返回的数据2')
        },2000)
    })
]).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results);
});
