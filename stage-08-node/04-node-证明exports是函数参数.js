/*思考:
export和require怎么来的?
	错误答案: 全局变量
		1. window不是Node中的全局对象
		2. Node中有一个全局对象global, 作用和window类似
	 正确答案: 函数参数
		 函数的标识: arguments
			获取函数的所有实参
		获取函数自身 arguments.callee
			返回函数本身
node文件组成剖析
	1. 当node在执行模块中的代码时，它会首先在代码的最顶部，添加如下代码   function (exports, require, module, __filename, __dirname) {
	2.  在代码的最底部，添加  }
	3. 所以模块中的代码都是包装在一个函数中执行的，并且在函数执行的同时传递进了5个实参
		exports:    该对象用来将函数内部的局部变量或局部函数暴露到外部
		require:   用来引入外部的模块
		module:   代表的是当前模块本身, exports就是module的属性;  我们既可以使用 exports 导出，也可以使用module.exports导出
		__filename:   当前模块的完整路径
		__dirname:    当前模块所在文件夹的完整路径
*/

// console.log(window.exports);
//
// console.log(global);
// console.log(global.exports);
// console.log(global.require);

// console.log(arguments);
// console.log(arguments.callee + '');


// function(exports, require, module, __filename, __dirname) {

// console.log(window.exports);
// console.log(global);
// console.log(global.exports);
// console.log(global.require);

// console.log(arguments);
//     console.log(arguments.callee + '');
// }