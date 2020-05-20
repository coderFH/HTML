import { FlyBehavior } from "./01-FlyBehavior";

class NoFlyBehavior implements FlyBehavior {
    fly(): void {
        console.log("不会飞翔");   
    } 
}

export {NoFlyBehavior}
