import { AbstractState } from "./03-AbstractState";
import { Context } from "./10-Context";
import { StateEnum } from "./01-StateEnum";
import { FeedBackState } from "./04-FeedBackState";
import { ReviewState } from "./08-ReviewState";

class GenerateState extends AbstractState {
    checkEvent(context : Context) : void {
        context.state = new ReviewState();
    }

    checkFailEvent(context : Context) : void {
        context.state = new FeedBackState()
    }

    getCurrentState() {
        return StateEnum.GENERATE;
    }

}

export {GenerateState}