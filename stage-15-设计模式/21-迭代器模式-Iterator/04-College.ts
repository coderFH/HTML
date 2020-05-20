import { FHIterator } from "./01-Iterator";

interface College {
    getName() : string;

    // 增加系的方法
    addDepartment(name : string,desc : string);

    // 返回一个迭代器,遍历
    createIterator() : FHIterator;
}

export {College}