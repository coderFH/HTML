import { AbstractState } from "./03-AbstractState";
import { Context } from "./10-Context";
import { StateEnum } from "./01-StateEnum";
import { FeedBackState } from "./04-FeedBackState";
import { NotPayState } from "./06-NotPayState";

class PublishState extends AbstractState {
    acceptOrderEvent(context : Context) : void {
        context.state = new NotPayState()
    }

    notPeopleAcceptEvent(context : Context) : void {
        context.state = new FeedBackState();
    }

    getCurrentState() {
        return StateEnum.PUBLISHED;
    }
}

export {PublishState}