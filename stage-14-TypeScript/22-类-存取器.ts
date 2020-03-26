/*
1.ts支持通过getters/seetters来截取对对象成员的访问
2.可以有效的控制对对象成员的访问
*/

//需求: 先检查密码是否正确,然后在允许修改员工信息

//密码
let passCode = '123456'

class Employee {
    private _fullName : string = ""

    //存取器
    //如果只实现了get 默认就是readonly
    get fullName() : string {
        return this._fullName
    }

    set fullName(newName : string) {
        if(passCode && passCode === '123456') {
            this._fullName = newName
        } else {
            console.log('错误,没有权限修改用户信息');
        }
    }
}

let p = new Employee()
p.fullName = "T-mac"
console.log(p.fullName);

export{}


