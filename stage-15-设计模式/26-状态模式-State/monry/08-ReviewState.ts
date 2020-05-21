import { AbstractState } from "./03-AbstractState";
import { Context } from "./10-Context";
import { StateEnum } from "./01-StateEnum";
import { PublishState } from "./07-PublishState";

class ReviewState extends AbstractState {
    makePriceEvent(context : Context) : void {
        context.state = new PublishState();
    }

    getCurrentState() {
        return StateEnum.REVIEWED;
    }
}

export {ReviewState}