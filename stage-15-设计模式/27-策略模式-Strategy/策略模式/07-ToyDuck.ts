import { Duck } from "./05-Duck";
import { NoFlyBehavior } from "./04-NoFlyBehavior";

class ToyDuck extends Duck {
    constructor() {
        super();
        this.flyBehavior = new NoFlyBehavior();
    }

    display(): void {
       console.log("唐老鸭");
    }
    quack() : void {
        console.log("唐老鸭不能叫,但是能说人话");
    }

    swim() : void {
        console.log("唐老鸭不会游泳");
    }
}

export {ToyDuck}