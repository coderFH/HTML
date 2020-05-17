interface Brand {
    open() : void;
    close() : void;
    call() : void;
}

class Xiaomi implements Brand {
    open(): void {
        console.log("小米手机开机");
    }
    close(): void {
        console.log("小米手机关机");
    }
    call(): void {
        console.log("小米手机打电话");
    }
}

class Vivo implements Brand {
    open(): void {
        console.log("Vivo手机开机");
    }
    close(): void {
        console.log("Vivo手机关机");
    }
    call(): void {
        console.log("Vivo手机打电话");
    }
}

abstract class Phone {
    // 组合品牌
    private brand : Brand;

    // 构造器
    constructor(brand : Brand) {
        this.brand = brand;
    }

    protected open() : void {
        this.brand.open();
    }

    protected close() : void {
        this.brand.close();
    }

    protected call() : void {
        this.brand.call();
    }
}

// 折叠手机
class FoldedPhone extends Phone {
    constructor(brand : Brand) {
        super(brand);
    }

    open() : void {
        super.open();
        console.log("折叠样式手机");   
    }

    close() : void {
        super.close();
        console.log("折叠样式手机");
    }

    call() : void {
        super.call();
        console.log("折叠样式手机");
    }
}

// 直板手机
class UprightPhone extends Phone {
    constructor(brand : Brand) {
        super(brand);
    }

    open() : void {
        super.open();
        console.log("直板样式手机");
    }

    close() : void {
        super.close();
        console.log("直板样式手机");
    }

    call() : void {
        super.call();
        console.log("直板样式手机");
    }
}

// 获取折叠式手机(样式+品牌)
let p1 = new FoldedPhone(new Xiaomi());
p1.open();
p1.call();
p1.close();

let p2 = new FoldedPhone(new Vivo());
p2.open();
p2.call();
p2.close();