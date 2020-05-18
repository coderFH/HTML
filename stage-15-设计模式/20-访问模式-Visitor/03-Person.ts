import { Action } from "./01-Action";

abstract class Person {
    //提供一个方法，让访问者可以访问
    abstract accept(action : Action) : void;
}

export {Person}