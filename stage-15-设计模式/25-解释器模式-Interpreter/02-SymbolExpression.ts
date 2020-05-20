import { Expression } from "./01-Expression";

class SymbolExpression extends Expression {

	protected left : Expression;
	protected right : Expression;

	public constructor(left : Expression, right : Expression) {
        super();
		this.left = left;
		this.right = right;
	}

    interpreter(value : Map<String, number>) : number {
        return 0;
    }
}

export {SymbolExpression}
