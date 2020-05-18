import { Person } from "./03-Person";
import { Action } from "./01-Action";

class Man extends Person {
    accept(action: Action): void {
       action.getManResutl(this);
    }
}

export {Man}