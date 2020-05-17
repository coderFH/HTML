import { Drink } from "../Coffee/01-Drink";


class Decorator extends Drink {
    private obj : Drink;

    constructor(obj : Drink) {
        super();
        this.obj = obj;
    }

    cost(): number {
        // getPrice自己的价格
        return super.getPrice() + this.obj.cost();
    }

    getDes() : string {
        // this.obj.getDes() 被装饰者的信息
        return super.getDes() + " $" + super.getPrice() + " && " + this.obj.getDes();
    }
}

export {Decorator}