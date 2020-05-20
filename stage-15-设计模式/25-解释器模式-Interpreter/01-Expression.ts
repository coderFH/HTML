abstract class Expression {
	abstract interpreter(value : Map<String, number>) : number;
}

export {Expression}