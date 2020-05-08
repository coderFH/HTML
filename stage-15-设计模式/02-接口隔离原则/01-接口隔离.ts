/*
让B,D都实现Interface1的所有方法,但A,C并不会用到所有的方法,所以根据接口隔离原则,
既然 A 只用到1,2,3 那么B只需要 实现 1,2,3 即可 4,5没必要实现
既然 C 只用到1,4,5 那么D只需要 实现 1,4,5 即可 2,3没必要实现
*/
interface Interface1 {
    operation1() : void;
    operation2() : void;
    operation3() : void;
    operation4() : void;
    operation5() : void;
}

class B implements Interface1 {
    operation1(): void {
        console.log("B实现了operation1");
    }
    operation2(): void {
        console.log("B实现了operation2");
    }
    operation3(): void {
        console.log("B实现了operation3");
    }
    operation4(): void {
        console.log("B实现了operation4");
    }
    operation5(): void {
        console.log("B实现了operation5");
    }
}

class D implements Interface1 {
    operation1(): void {
        console.log("D实现了operation1");
    }
    operation2(): void {
        console.log("D实现了operation2");
    }
    operation3(): void {
        console.log("D实现了operation3");
    }
    operation4(): void {
        console.log("D实现了operation4");
    }
    operation5(): void {
        console.log("D实现了operation5");
    }
}

class A { //A 类通过接口 Interface1 依赖(使用) B 类，但是只会用到 1,2,3 方法
    use1(i : Interface1) {
        i.operation1();
    }
    use2(i : Interface1) {
        i.operation2();
    }
    use3(i : Interface1) {
        i.operation3();
    }
}

class C { //C 类通过接口 Interface1 依赖(使用) D 类，但是只会用到 1,4,5 方法
    use1(i : Interface1) {
        i.operation1();
    }
    use4(i : Interface1) {
        i.operation4();
    }
    use5(i : Interface1) {
        i.operation5();
    }
}

let a = new A();
a.use1(new B());
a.use2(new B());
a.use3(new B());

let c = new C();
c.use1(new D());
c.use4(new D());
c.use5(new D());

export {A,B,C,D,Interface1}