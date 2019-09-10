
new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve('hello vuejs');
        reject('error message');
    },2000)
}).then(data => {
    console.log(data);
},err => {
    console.log(err);
});