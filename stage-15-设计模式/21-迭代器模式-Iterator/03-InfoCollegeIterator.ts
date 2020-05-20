import {FHIterator} from "./01-Iterator"
import { Department } from "./07-Department";

class InfoCollegeIterator implements FHIterator {
    // 这里我们需要Department 是以怎样的方式存放
    // 真是情况下,这里不一定会使用数组进行存放,所以要使用迭代器模式,统一的去进行遍历处理
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

export {InfoCollegeIterator}