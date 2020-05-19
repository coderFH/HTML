import {FHIterator} from "./01-Iterator"
import { Department } from "./07-Department";

class ComputerCollegeIterator implements FHIterator {
    // 这里我们需要知道 Department 是以怎样的方式存放
    departments : Array<Department>;
    position : number = 0;

    constructor(departments : Array<Department>) {
        this.departments = departments;
    }

    // 判断是否还有下一个元素
    hasNext(): boolean {
        if (this.position >= this.departments.length ||this.departments[this.position] === undefined) {
            return false;
        } else {
            return true;
        }
    }

    next(): Object {
        let department = this.departments[this.position++];
        return department;
    }
}

export {ComputerCollegeIterator}