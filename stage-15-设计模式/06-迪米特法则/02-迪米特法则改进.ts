/*
有一个学校，下属有各个学院和总部，现要求打印出学校总部员工ID和学院员工的id
*/

// 学校总部员工类
class Employee {
    id : string;

    constructor(id : string) {
        this.id = id;
    } 

    getId() : string {
        return this.id;
    }
}

// 学院的员工类
class CollegeEmployee {
    id : string;

    constructor(id : string) {
        this.id = id;
    } 

    getId() : string {
        return this.id;
    }
}

// 管理学院员工的管理类
class CollegeManager {
    // 返回学院的所有员工
    getAllEmployee() : Array<CollegeEmployee> {
        let list : Array<CollegeEmployee> =  new Array<CollegeEmployee>();
        for (let i = 0; i < 10; i++) { // 增加10个员工到list
            let emp = new CollegeEmployee("学院员工id:" + i);
            list.push(emp)
        }
        return list;
    }

    printEmployee() : void {
        let list1 : Array<CollegeEmployee> = this.getAllEmployee();
        console.log("--------学院员工--------");
        for (let i = 0; i < list1.length; i++) {
            let e = list1[i];
            console.log(e.getId());
        }
    }
}

// 学校管理类
class SchoolManager {
    // 返回学校总部的所有员工
    getAllEmployee() : Array<Employee> {
        let list : Array<Employee> =  new Array<Employee>();
        for (let i = 0; i < 5; i++) {
            let emp = new Employee("学校总部员工id:" + i);
            list.push(emp)
        }
        return list;
    }

    // 该方法完成输出学校总部和学院员工信息
    printAllEmployee(sub : CollegeManager ) : void {
        //1. 将输出学院的员工方法，封装到 CollegeManager
        sub.printEmployee();
        
        // 获取到学校总部员工
        let list2 : Array<Employee> = this.getAllEmployee();
        console.log("--------总部员工--------");
        for (let i = 0; i < list2.length; i++) {
            let e = list2[i];
            console.log(e.getId());
        }
    }
}

// 创建一个SchoolManager对象
let schoolManager = new SchoolManager();
// 输出学院的员工id和学校总部的员工信息
schoolManager.printAllEmployee(new CollegeManager());

export {}