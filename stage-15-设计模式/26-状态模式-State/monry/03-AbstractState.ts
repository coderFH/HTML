import { State } from "./02-State";
import { Context } from "./10-Context";

abstract class AbstractState implements State {
	protected static EXCEPTION = new Error("操作流程不允许");

	//抽象类,默认实现了State接口的所有方法
	//该类的所有方法,其子类(具体的状态类),可以有选择的进行重写
    checkEvent(context : Context) : void {
        throw AbstractState.EXCEPTION;
    }

    checkFailEvent(context : Context) : void {
        throw AbstractState.EXCEPTION;
    }

    makePriceEvent(context : Context) : void {
        throw AbstractState.EXCEPTION;
    }

    acceptOrderEvent(context : Context) : void {
        throw AbstractState.EXCEPTION;
    }

    notPeopleAcceptEvent(context : Context) : void {
        throw AbstractState.EXCEPTION;
    }

    payOrderEvent(context : Context) : void {
        throw AbstractState.EXCEPTION;
    }

    orderFailureEvent(context : Context) : void {
        throw AbstractState.EXCEPTION;
    }

    feedBackEvent(context : Context) : void {
        throw AbstractState.EXCEPTION;
    }

    getCurrentState() : number {
        return 0;
    }
}

export {AbstractState}
