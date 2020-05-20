abstract class Duck {
    abstract display() : void;

    quack() : void {
        console.log("鸭子嘎嘎叫....");
    }

    swim() : void {
        console.log("鸭子会游泳.....");
    }

    fly() : void {
        console.log("鸭子会飞....."); 
    }
}

class PekingDuck extends Duck {
    display(): void {
        console.log("北京鸭");
    }

    // 北京鸭不能飞,需要重写
    fly(): void {
        console.log("北京鸭不能飞翔");
    }
}

class ToyDuck extends Duck {
    display(): void {
        console.log("玩具鸭");
    }

    quack() : void {
        console.log("玩具鸭不能叫...");
    }

    swim() : void {
        console.log("玩具鸭不会游泳.....");
    }

    fly() : void {
        console.log("玩具鸭不会飞....."); 
    } 
}

class WildDuck extends Duck {
    display(): void {
        console.log("这是怒晴鸭");
    }
}

/*
传统的方式实现的问题分析和解决方案?
    1) 其它鸭子，都继承了Duck类，所以fly让所有子类都会飞了，这是不正确的
    2) 上面说的1的问题，其实是继承带来的问题:对类的局部改动，尤其超类的局部改动，会影响其他部分。会有溢出效应
    3) 为了改进1问题，我们可以通过覆盖fly方法来解决 => 覆盖解决
    4) 问题又来了，如果我们有一个玩具鸭子ToyDuck,这样就需要ToyDuck去覆盖Duck的所有实现的方法=>解决思路 -》 策略模式 (strategy pattern)
*/

export {}