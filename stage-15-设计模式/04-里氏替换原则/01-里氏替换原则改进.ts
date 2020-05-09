class Base {}

class A extends Base {
    func1(num1 : number, num2 : number) {
        return num1 - num2;
    }
}

class B extends Base {
    private a = new A();

    // 如果B需要使用A类的方法,使用组合关系
    func1(num1 : number, num2 : number) {
        return num1 + num2;
    }

    //我们仍想使用A的方法
    func2(a : number,b : number) {
        return this.a.func1(a,b);
    }
}

// 因为B不再继承A,因此调用者,不会认为func1是求减法
let b = new B()
console.log(b.func1(10,5));

//使用组合仍然可以使用A类的相关方法
console.log(b.func2(10,5));

export{}