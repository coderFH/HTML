import { AbstractState } from "./03-AbstractState";
import { StateEnum } from "./01-StateEnum";

class FeedBackState extends AbstractState {
    getCurrentState() {
        return StateEnum.FEED_BACKED;
    }
}

export {FeedBackState}