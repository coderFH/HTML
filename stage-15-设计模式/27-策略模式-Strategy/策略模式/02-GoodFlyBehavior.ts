import { FlyBehavior } from "./01-FlyBehavior";

class GoodFlyBehavior implements FlyBehavior {
    fly() : void {
        console.log("飞翔技术高超~~~");
        
    }
}

export {GoodFlyBehavior}