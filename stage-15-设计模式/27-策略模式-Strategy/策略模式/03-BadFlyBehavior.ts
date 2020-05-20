import { FlyBehavior } from "./01-FlyBehavior";

class BadFlyBehavior implements FlyBehavior {
    fly(): void {
        console.log("飞翔技术一般");   
    }
}

export {BadFlyBehavior}