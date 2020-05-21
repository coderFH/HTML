/*
import { Expression } from "./01-Expression";

class Calculator {
    // 定义表达式
	private  expression : Expression;

	constructor(expStr : string) { // expStr = a + b
        let stack = new Array<Expression>(); // 安排运算先后顺序
        
        for (let i = 0; i < export.length; i++) {
            // 解析成[a,+,b];
        }

		char[] charArray = expStr.toCharArray();// [a, +, b]

		left : Expression = null;
		right : Expression = null;

        // 遍历我们的字符数组,即遍历[a,+,b]
        // 针对不同的情况,做处理
		for (int i = 0; i < charArray.length; i++) {
			switch (charArray[i]) {
			case '+': 
				left = stack.pop();// 从stack取出left => "a"
				right = new VarExpression(String.valueOf(charArray[++i]));// 取出右表达式"b"
				stack.push(new AddExpression(left, right));// 然后根据得到left 和 right 构建 AddExpresson 加入 stack
				break;
			case '-': // 
				left = stack.pop();
				right = new VarExpression(String.valueOf(charArray[++i]));
				stack.push(new SubExpression(left, right));
				break;
			default: 
				//如果是一个 Var 就创建要给 VarExpression 对象，并 push 到 stack
				stack.push(new VarExpression(String.valueOf(charArray[i])));
				break;
			}
        }
        //当遍历完整个 charArray 数组后，stack 就得到最后 Expression
		this.expression = stack.pop();
	}

	public int run(HashMap<String, Integer> var) {
        //最后将表达式 a+b 和 var = {a=10,b=20} 
        //然后传递给 expression 的 interpreter 进行解释执行
		return this.expression.interpreter(var);
	}
}

export {Calculator}
*/