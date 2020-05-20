// import { Expression } from "./01-Expression";

// class Calculator {
// 	private  expression : Expression;

// 	constructor(expStr : string) {
//         let stack = new Array<Expression>();
        
//         for (let i = 0; i < export.length; i++) {
            
            
//         }

// 		char[] charArray = expStr.toCharArray();// [a, +, b]

// 		left : Expression = null;
// 		right : Expression = null;


// 		for (int i = 0; i < charArray.length; i++) {
// 			switch (charArray[i]) {
// 			case '+': //
// 				left = stack.pop();// ��stackȡ��left => "a"
// 				right = new VarExpression(String.valueOf(charArray[++i]));// ȡ���ұ��ʽ "b"
// 				stack.push(new AddExpression(left, right));// Ȼ����ݵõ�left �� right ���� AddExpresson����stack
// 				break;
// 			case '-': // 
// 				left = stack.pop();
// 				right = new VarExpression(String.valueOf(charArray[++i]));
// 				stack.push(new SubExpression(left, right));
// 				break;
// 			default: 
// 				//�����һ�� Var �ʹ���Ҫ�� VarExpression ���󣬲�push�� stack
// 				stack.push(new VarExpression(String.valueOf(charArray[i])));
// 				break;
// 			}
// 		}
// 		this.expression = stack.pop();
// 	}

// 	public int run(HashMap<String, Integer> var) {
// 		//��󽫱��ʽa+b�� var = {a=10,b=20}
// 		//Ȼ�󴫵ݸ�expression��interpreter���н���ִ��
// 		return this.expression.interpreter(var);
// 	}
// }

// export {Calculator}