class A {
    func1(num1 : number, num2 : number) {
        return num1 - num2;
    }
}

class B extends A {
    //重写了A类方法,可能是无意识的,你把父类的本意给换了
    func1(num1 : number, num2 : number) {
        return num1 + num2;
    }
}

let b = new B()
console.log(b.func1(10,5));

export{}