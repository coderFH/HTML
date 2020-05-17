abstract class Pizza {
    protected name : string;

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



class OrderPizze {
    pizze : Pizza = null;// 订购披萨的类型
    orderType : string;

    constructor() { 
        let arr = ["greek","cheese","pepper"];
        for (let index = 0; index < arr.length; index++) {
            let orderType = arr[index];
            if (orderType === "greek") {
                this.pizze = new GreekPizze();
                this.pizze.pizzaName = "希腊披萨";
            } else if (orderType === "cheese")  {
                this.pizze = new CheesePizze();
                this.pizze.pizzaName = "奶酪披萨";
            } else if (orderType === "pepper")  { // 新增一个胡椒披萨,这里也需要改动
                this.pizze = new PepperPizza();
                this.pizze.pizzaName = "胡椒披萨";
            }else {
                console.log("选择退出");
                break;
            }
            this.pizze.prepare();
            this.pizze.bake();
            this.pizze.cut();
            this.pizze.box(); 
        } 
    }
}

// 当新增一个披萨类型时,改动会很多
// 新增一个胡椒披萨
class PepperPizza extends Pizza {
    prepare(): void {
        console.log("给制作胡椒披萨准备原材料");
    }
}

let s = new OrderPizze();

export{}