import { Expression } from "./01-Expression";

/*
    抽象运算符号解析器 这里，每个运算符号，都只和自己左右两个数字有关系，
    但左右两个数字有可能也是一个解析的结果，无论何种类型，都是 Expression 类的实现类
*/
class SymbolExpression extends Expression {

	protected left : Expression;
	protected right : Expression;

	public constructor(left : Expression, right : Expression) {
        super();
		this.left = left;
		this.right = right;
	}

    //因为 SymbolExpression 是让其子类来实现，因此 interpreter 是一个默认实现
    interpreter(value : Map<String, number>) : number {
        return 0;
    }
}

export {SymbolExpression}
