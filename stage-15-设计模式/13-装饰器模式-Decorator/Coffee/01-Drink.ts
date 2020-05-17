abstract class  Drink {
    des : string; // 描述
    private price : number = 0.0;

    setDes(des : string) {
        this.des = des;
    }
    getDes() : string {
        return this.des;
    }

    setPrice(price : number) {
        this.price = price;
    }

    getPrice() : number {
        return this.price;
    }

    // 计算费用的抽象方法
    abstract cost() : number; // 子类实现
}

export {Drink}