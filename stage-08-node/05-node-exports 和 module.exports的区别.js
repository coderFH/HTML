/*
1. 值类型和引用类型
2. 两者区别
	exports只能使用.语法来向外暴露内部变量
		exports.xxx = xxx;
	module.exports既可以通过.语法，也可以直接赋值一个对象
		module.exports.xxx = yyy;
module.exports = {xxx: yyy};
*/

//正常情况下,他们的指向是一致的
let str = '淘宝学院';
exports.str = str;
module.exports.str = str;
console.log(exports === module.exports);


// 1. 常规操作
exports.str = '张三';
exports.fn= ()=>{
   console.log('哈哈哈哈');
};
exports.obj = {
   name: '李四',
   age: 18
};


// 非常规操作
exports = {
   name: '张三',
   age: 19
}; //通过这一步 exports已经修改了指向,和module.exports 指向不一致了

console.log(exports);
console.log(module.exports);