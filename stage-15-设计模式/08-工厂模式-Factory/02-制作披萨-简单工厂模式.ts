abstract class Pizza {
    protected name : string = null;

    // 准备原材料,不同的披萨原材料是不一样的,所以做成抽象方法
    abstract prepare() : void;

    // 烘焙
    bake() : void {
        console.log(this.name + "baking;");
    }

    // 裁剪
    cut() : void {
        console.log(this.name + "cutting;");   
    }

    // 打包
    box() : void {
        console.log(this.name + "boxing;");
    }

    set pizzaName(name : string) {
        this.name = name;
    }
}

// 奶酪披萨
class CheesePizze extends Pizza {
    prepare(): void {
        console.log("给制作奶酪披萨准备原材料");
    } 
}

// 希腊披萨
class GreekPizze extends Pizza {
    prepare(): void {
        console.log("给制作希腊披萨准备原材料");
    }
}

// 胡椒披萨
class PepperPizza extends Pizza {
    prepare(): void {
        console.log("给制作胡椒披萨准备原材料");
    }
}

// 简单的工厂,把创建对象的过程进行了封装
class SimpleFactory {
    pizza : Pizza = null;// 订购披萨的类型

    // 根据orderType,返回对应的Pizza对象
    createPizza(orderType : string) : Pizza {
        console.log("使用简单工厂模式");
        if (orderType === "greek") {
            this.pizza = new GreekPizze();
            this.pizza.pizzaName = "希腊披萨";
        } else if (orderType === "cheese")  {
            this.pizza = new CheesePizze();
            this.pizza.pizzaName = "奶酪披萨";
        } else if (orderType === "pepper")  {
            this.pizza = new PepperPizza();
            this.pizza.pizzaName = "胡椒披萨";
        } else {
            this.pizza = null;
        }
        return this.pizza;
    }
}

class OrderPizze {
    simpleFactory : SimpleFactory = null;
    pizza : Pizza = null;

    constructor(simpleFactory : SimpleFactory) {
        this.setupFactory = simpleFactory;
    }

    set setupFactory(simpleFactory : SimpleFactory) {
        this.simpleFactory = simpleFactory; //设置简单的工厂对象

        let arr = ["greek","cheese","pepper","suiyi"];
        for (let index = 0; index < arr.length; index++) {
            let orderType = arr[index];
            this.pizza = this.simpleFactory.createPizza(orderType);
            if (this.pizza !== null) { // 订购成功
                this.pizza.prepare();
                this.pizza.bake();
                this.pizza.cut();
                this.pizza.box(); 
            } else {
                console.log("订购披萨失败,没有这一款");
            }
        } 
    }
}

//使用简单工厂模式
let s = new OrderPizze(new SimpleFactory());

export{}