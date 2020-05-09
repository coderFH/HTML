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
}

// 学校管理类
/*
    分析SchoolManager类的直接朋友有哪些? 
    直接朋友 Employee  CollegeManager
    间接朋友 CollegeEmployee  对于SchoolManager 是一个陌生类,违背了 迪米特法则
*/
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
        //分析问题
        //1. 这里的 CollegeEmployee 不是 SchoolManager 的直接朋友 
        //2. CollegeEmployee 是以局部变量方式出现在 SchoolManager
        //3. 违反了 迪米特法则
        let list1 : Array<CollegeEmployee> = sub.getAllEmployee();
        console.log("--------学院员工--------");
        for (let i = 0; i < list1.length; i++) {
            let e = list1[i];
            console.log(e.getId());
        }

        // 获取到学校总部员工
        let list2 : Array<Employee> = this.getAllEmployee();
        console.log("--------总部员工--------");
        for (let i = 0; i < list2.length; i++) {
            let e = list2[i];
            console.log(e.getId());
        }
    }
}

// 1. 前面设计的问题在于SchoolManager中，CollegeEmployee类并不是SchoolManager类的直接朋友(分析) 
// 2. 按照迪米特法则，应该避免类中出现这样非直接朋友关系的耦合

// 创建一个SchoolManager对象
let schoolManager = new SchoolManager();
// 输出学院的员工id和学校总部的员工信息
schoolManager.printAllEmployee(new CollegeManager());

export {}