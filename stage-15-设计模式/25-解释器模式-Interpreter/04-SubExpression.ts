import { SymbolExpression } from "./02-SymbolExpression";
import { Expression } from "./01-Expression";

class SubExpression extends SymbolExpression {

	constructor(left : Expression,right : Expression) {
		super(left, right);
    }
    
    //求出 left 和 right 表达式相减后的结果
    interpreter(value : Map<String, number>) : number {
        return super.left.interpreter(value) - super.right.interpreter(value);
    }
}

export {SubExpression}
