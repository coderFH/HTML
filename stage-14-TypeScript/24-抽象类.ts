/*
抽象类
1.抽象类作为其他派生类的基类使用
2.他们一般不会直接被实例化
3.不同于接口,抽象类可以包含成员的实现细节
4.'abstract' 关键字是用于定义抽象类和抽象类内部定义的抽象方法


抽象方法
1.抽象类中的抽象方法不包含具体实现并且必须在派生类中现实
2.抽象方法的语法与接口方法相似,两者都是定义方法签名但不包含方法体
3.抽象方法必须包含'abstract'关键字并且可以包含访问修饰符
*/

abstract class Department {
    name : string
    constructor(name : string) {
        this.name = name
    }

    printName() : void {
        console.log('部门名称:' + this.name);
        
    }

    //抽象方法
    abstract printMeeting() : void //必须在每个继承的派生类中去实现
}


//统计部
class AccountingDepartment extends Department {
    constructor() {
        super('统计部')
    }

    printMeeting(): void {
        console.log('统计部每天十点统计数据');
    }
}

let a = new AccountingDepartment() 
a.printMeeting()
a.printName()

export {}

