import { Person } from "./03-Person";
import { Action } from "./01-Action";

class Woman extends Person {
    accept(action: Action): void {
       action.getWomanResult(this);
    }
}

export {Woman}