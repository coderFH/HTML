import { SymbolExpression } from "./02-SymbolExpression";
import { Expression } from "./01-Expression";

class AddExpression extends SymbolExpression  {

	constructor(left : Expression,right : Expression) {
		super(left, right);
    }
    
    interpreter(value : Map<String, number>) : number {
        return super.left.interpreter(value) + super.right.interpreter(value);
    }
}

export {AddExpression}
