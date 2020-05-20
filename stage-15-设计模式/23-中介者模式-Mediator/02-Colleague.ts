import { Mediator } from "./00-Mediator"

abstract class Colleague {
    private mediator : Mediator;
    name : string;

    constructor(mediator : Mediator,name : string) {
        this.mediator = mediator;
        this.name = name;
    }

    getMediator() : Mediator {
        return this.mediator;
    }

    abstract sendMessage(stateChange : number) : void;
}

export {Colleague}