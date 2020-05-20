import { FlyBehavior } from "./01-FlyBehavior"
import { QuackBehavior } from "./09-QuackBehavior";

abstract class Duck {
    // 策略接口
    flyBehavior : FlyBehavior;

    // 其他属性策略接口
    quackBehavior : QuackBehavior;
    
    abstract display() : void; // 显示鸭子信息

    quack() : void {
        console.log("鸭子嘎嘎叫....");
    }

    swim() : void {
        console.log("鸭子会游泳.....");
    }

    fly() : void {
        if(this.flyBehavior !== null) {
            this.flyBehavior.fly();
        }
    }

    setFlyBehavior(flyBehavior :FlyBehavior) {
        this.flyBehavior = flyBehavior;
    }

    setQuackBehavior(flyBehavior :FlyBehavior) {
        this.quackBehavior = this.quackBehavior;
    }
}

export {Duck}