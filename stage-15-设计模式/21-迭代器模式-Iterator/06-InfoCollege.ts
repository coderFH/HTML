import { College } from "./04-College";
import { FHIterator } from "./01-Iterator";
import { InfoCollegeIterator } from "./03-InfoCollegeIterator";
import { Department } from "./07-Department";

class InfoCollege implements College {
    departments : Array<Department>;
    // numOfDepartment : number = 0; // 保存当前数组的对象个数

    constructor() {
        this.departments = new Array<Department>(5);
        this.addDepartment("信息安全专业", "信息安全专业");
        this.addDepartment("网络安全专业", "网络安全专业");
        this.addDepartment("服务器安全专业", "服务器安全专业");
    }

    getName(): string {
        return "信息工程学院"
    }

    addDepartment(name: string, desc: string) {
        let department = new Department(name,desc);
        this.departments.unshift(department);

        // this.departments[this.numOfDepartment] = department;
        // this.numOfDepartment++;
    }

    createIterator(): FHIterator {
        return new InfoCollegeIterator(this.departments);
    }
}

export {InfoCollege}