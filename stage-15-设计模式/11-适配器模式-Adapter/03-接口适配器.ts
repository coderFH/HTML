interface Interface4 {
    m1() : void;
    m2() : void;
    m3() : void;
    m4() : void;
}

// 在AbsAdapter 我们将 Interface4 的方法进行默认实现
abstract class AbsAdapter implements Interface4 {
    m1(): void {}
    m2(): void {}
    m3(): void {}
    m4(): void {}
}

class adapter extends AbsAdapter {
    m1() : void {
        console.log("我是子类实现的");
    }
}

let a = new adapter();
a.m1();
a.m2();

export {}