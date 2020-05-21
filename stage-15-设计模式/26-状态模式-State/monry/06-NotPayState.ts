import { AbstractState } from "./03-AbstractState";
import { Context } from "./10-Context";
import { StateEnum } from "./01-StateEnum";
import { PaidState } from "./09-PaidState";
import { FeedBackState } from "./04-FeedBackState";

class NotPayState extends AbstractState {
   

    payOrderEvent(context : Context) : void {
        context.state = new PaidState();
    }

    feedBackEvent(context : Context) : void {
       context.state = new FeedBackState();
    }
    getCurrentState() {
        return StateEnum.NOT_PAY;
    }

}

export {NotPayState}