import { AbstractState } from "./03-AbstractState";
import { Context } from "./10-Context";
import { StateEnum } from "./01-StateEnum";

class PaidState extends AbstractState {
    feedBackEvent(context : Context) : void {
        throw AbstractState.EXCEPTION;
    }

    getCurrentState() {
        return StateEnum.PAID;
    }
}

export {PaidState}