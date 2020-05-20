import { Colleague } from "./02-Colleague";

// 中介者
abstract class Mediator {
    abstract register(colleagueName : string,colleage :  Colleague) : void;
    abstract getMessage(stateChange : number, colleagueName : string) : void;
    abstract sendMessage() : void;
}

export {Mediator}