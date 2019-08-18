new Promise((resolve,reject)=>{
    resolve(1,2,33,44);
}).then((data1,data2,data3,data4)=>{
    console.log(data1, data2, data3, data4);
});
