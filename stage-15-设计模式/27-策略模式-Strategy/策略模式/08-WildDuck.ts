import { Duck } from "./05-Duck";
import { GoodFlyBehavior } from "./02-GoodFlyBehavior";

class WildDuck extends Duck {
    constructor() {
        super();
        this.flyBehavior = new GoodFlyBehavior();
    }

    display(): void {
       console.log("怒晴鸭");
    }
}

export {WildDuck}