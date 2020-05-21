import { SymbolExpression } from "./02-SymbolExpression";
import { Expression } from "./01-Expression";

// 加法解释器
class AddExpression extends SymbolExpression  {

	constructor(left : Expression,right : Expression) {
		super(left, right);
    }
    
    // 处理相加
    // var 仍然是{a=10,b=20}
    interpreter(value : Map<String, number>) : number {
        // super.left.interpreter(value) :  返回left 表达式对应的值 a = 10
        // super.right.interpreter(value) : 返回right表达式对应的值 b = 20
        return super.left.interpreter(value) + super.right.interpreter(value);
    }
}

export {AddExpression}
