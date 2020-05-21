import { Expression } from "./01-Expression";

// 变量解释器
class VarExpression extends Expression {

	private key : string;  // key=a,key=b,key=c

	public constructor(key : string) {
        super();
		this.key = key;
    }
    
    // var 就是{a=10, b=20}
    // interpreter 根据 变量名称，返回对应值
    interpreter(value : Map<String, number>) : number {
        return value.get(this.key)!;
    }
}

export {VarExpression}
