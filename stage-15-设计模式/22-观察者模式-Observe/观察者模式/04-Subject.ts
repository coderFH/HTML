import { Observer } from "./01-Observer";

interface Subject {
    registerObserver(o : Observer) : void;
    removeObserver(o : Observer) : void;
    notifyObservers() : void;
}

export {Subject}