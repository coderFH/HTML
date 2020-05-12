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

// 北京的奶酪披萨
class BJCheesePizze extends Pizza {
    prepare(): void {
        this.pizzaName = "北京奶酪披萨";
        console.log("给制作 北京奶酪披萨 准备原材料");
    } 
}

// 北京胡椒披萨
class BJPepperPizza extends Pizza {
    prepare(): void {
        this.pizzaName = "北京胡椒披萨";
        console.log("给制作 北京胡椒披萨 准备原材料");
    }
}

// 伦敦的奶酪披萨
class LDCheesePizze extends Pizza {
    prepare(): void {
        this.pizzaName = "伦敦奶酪披萨";
        console.log("给制作 伦敦奶酪披萨 准备原材料");
    } 
}

// 伦敦胡椒披萨
class LDPepperPizza extends Pizza {
    prepare(): void {
        this.pizzaName = "伦敦胡椒披萨";
        console.log("给制作 伦敦胡椒披萨 准备原材料");
    }
}

abstract class OrderPizza {
    pizza : Pizza = null;

    constructor() {
        let arr = ["cheese","pepper","没有的"];
        for (let index = 0; index < arr.length; index++) {
            let orderType = arr[index];
            this.pizza = this.createPizza(orderType); //抽象的方法,由工厂子类完成
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

    // 定义一个抽象方法,createPizza,让各个工厂子类自己实现
    abstract createPizza(orderType : string);
}

class BJOrderPizza extends OrderPizza {
    createPizza(orderType: string) : Pizza {
        let pizza = null;
        if(orderType === "cheese") {
            pizza = new BJCheesePizze();
        } else if(orderType === "pepper") {
            pizza = new BJPepperPizza();
        }
        return pizza;
    }
}

class LDOrderPizza extends OrderPizza {
    createPizza(orderType: string) : Pizza {
        let pizza = null;
        if(orderType === "cheese") {
            pizza = new LDCheesePizze();
        } else if(orderType === "pepper") {
            pizza = new LDPepperPizza();
        }
        return pizza;
    }
}

//创建北京口味的各种pizza
let o = new BJOrderPizza();

//创建伦敦口味的各种pizza
let l = new LDOrderPizza();

export{}