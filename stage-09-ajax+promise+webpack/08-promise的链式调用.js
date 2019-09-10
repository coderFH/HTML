// 网络请求到 aaa -> 自己处理 拼接111
// aaa111 ->自己处理
// aaa222
// new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('aaa');
//     },2000)
// }).then(res => {
//     //1.自己处理的过程,模拟10行代码
//     console.log(res);
//
//     //
//     return new Promise((resolve) => {
//         resolve(res + '111')
//     })
// }).then(res => {
//     //1.自己处理的过程,模拟10行代码
//     console.log(res);
//
//     return new Promise((resolve) => {
//         resolve(res + '222')
//     })
// }).then(res => {
//     console.log(res);
// });

//因为上边的过程 之后的两个promise都不是异步的 ,所以没必要new,可以改成下边的写法
// new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('aaa');
//     },2000)
// }).then(res => {
//     //1.自己处理的过程,模拟10行代码
//     console.log(res);
//
//     return Promise.resolve(res + '111')
// }).then(res => {
//     //1.自己处理的过程,模拟10行代码
//     console.log(res);
//
//     return Promise.resolve(res + '222')
// }).then(res => {
//     console.log(res);
// });

//上边的写法还是不够简洁 , 省略掉Promise.resolve
new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('aaa');
    },2000)
}).then(res => {
    //1.自己处理的过程,模拟10行代码
    console.log(res);

    // return res + '111' //成功的话
    throw 'err message' //失败的话这么处理
}).then(res => {
    //1.自己处理的过程,模拟10行代码
    console.log(res);

    return res + '222'
}).then(res => {
    console.log(res);

}).catch(err=>{
    console.log(err);
});
