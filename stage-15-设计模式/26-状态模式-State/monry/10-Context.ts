import { State } from "./02-State";
import { AbstractState } from "./03-AbstractState";

// 环境上下文
class Context extends AbstractState {
	//当前的状态 state, 根据我们的业务流程处理，不停的变化
	state : State;

    checkEvent(context : Context) : void {
        this.state.checkEvent(this);
        this.getCurrentState();
    }

    checkFailEvent(context : Context) : void {
        this.state.checkFailEvent(this);
        this.getCurrentState();
    }

    makePriceEvent(context : Context) : void {
        this.state.makePriceEvent(this);
        this.getCurrentState();
    }

    acceptOrderEvent(context : Context) : void {
        this.state.acceptOrderEvent(this);
        this.getCurrentState();
    }

     notPeopleAcceptEvent(context : Context) : void {
        this.state.notPeopleAcceptEvent(this);
        this.getCurrentState();
    }

    payOrderEvent(context : Context) : void {
        this.state.payOrderEvent(this);
        this.getCurrentState();
    }

    orderFailureEvent(context : Context) : void {
        this.state.orderFailureEvent(this);
        this.getCurrentState();
    }

    feedBackEvent(context : Context) : void {
        this.state.feedBackEvent(this);
        this.getCurrentState();
    }

    getCurrentState(): number {
        console.log("当前状态:" + this.state.getCurrentState());
        return this.state.getCurrentState();
    }
}

export {Context}
