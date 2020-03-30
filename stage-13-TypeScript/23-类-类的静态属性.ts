/*
静态属性:
1.实例属性,类的实例成员,仅当类被实例化的时候才会被初始化的属性
2.我们也可以创建类的静态成员,这些属性存在于类本身上面而不是类的实例上
*/
class Company {
    //静态属性
    static title = '阿里-'
    //实例属性
    college : string

    constructor(college : string) {
        this.college = college
    }

    fullName() : string {
        return Company.title + this.college
    }
}

let company = new Company('人工智能部')
console.log(company.fullName());

let company1 = new Company('移动开发部')
console.log(company1.fullName());

export{}
