import { College } from "./04-College";
import { FHIterator } from "./01-Iterator";
import { Department } from "./07-Department";

class OutPutImpl {
    // 学院集合
    collegeList : Array<College>

    constructor(collegeList : Array<College>) {
        this.collegeList = collegeList;
    }

    // 遍历所有学院,然后调用printDepartment 输出各个学院的系
    printCollege() : void {
        for (let i = 0; i < this.collegeList.length; i++) {
           let college = this.collegeList[i];
           console.log("=== "+college.getName() +"=====");
           this.printDepartment(college.createIterator()); // 得到对应的迭代器
            
        }
    }

    printDepartment(iterator : FHIterator) {
        while(iterator.hasNext()) {
            let d = <Department>iterator.next();
            console.log(d.getName());   
        }
    }
}

export {OutPutImpl}