import { Expression } from "./01-Expression";

class VarExpression extends Expression {

	private key : string; 

	public constructor(key : string) {
        super();
		this.key = key;
    }
    
    interpreter(value : Map<String, number>) : number {
        return value.get(this.key)!;
    }
}

export {VarExpression}
