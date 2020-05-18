import { Person } from "./03-Person";
import { Action } from "./01-Action";

class ObjectStructure {
    // 维护一个集合
    persons = new Array<Person>();

    // 增加
    attach(p : Person) : void {
        this.persons.push(p);
    }

    // 移除
    detach(p : Person) : void {
        // this.persons.
    }

    // 显示测评情况
    display(action : Action) : void {
        for (let i = 0; i < this.persons.length; i++) {
            let p = this.persons[i];
            p.accept(action);
        }
    }
}

export {ObjectStructure}