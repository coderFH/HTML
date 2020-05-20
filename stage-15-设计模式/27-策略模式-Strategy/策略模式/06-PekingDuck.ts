import { Duck } from "./05-Duck";
import { BadFlyBehavior } from "./03-BadFlyBehavior";

class PekingDuck extends Duck {
    constructor() {
        super();
        this.flyBehavior = new BadFlyBehavior();
    }

    display(): void {
       console.log("北京鸭");
    }
}

export {PekingDuck}