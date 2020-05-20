import { College } from "./04-College";
import { ComputerCollegeIterator } from "./02-computerCollegeIterator";
import { FHIterator } from "./01-Iterator";
import { Department } from "./07-Department";

class ComputerCollege implements College {
    departments : Array<Department>;
    // numOfDepartment : number = 0; // 保存当前数组的对象个数

    constructor() {
        this.departments = new Array<Department>(5);
        this.addDepartment("Java专业","Java专业");
        this.addDepartment("PHP 专业", " PHP 专业");
        this.addDepartment("大数据专业", "大数据专业");
    }

    getName(): string {
        return "计算机学院"
    }

    addDepartment(name: string, desc: string) {
        let department = new Department(name,desc);
        this.departments.unshift(department);

        // this.departments[this.numOfDepartment] = department;
        // this.numOfDepartment++;
    }

    createIterator(): FHIterator {
        return new ComputerCollegeIterator(this.departments);
    }
}

export {ComputerCollege}