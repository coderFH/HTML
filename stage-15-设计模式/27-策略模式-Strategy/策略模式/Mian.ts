import { WildDuck } from "./08-WildDuck";
import { ToyDuck } from "./07-ToyDuck";
import { PekingDuck } from "./06-PekingDuck";
import { NoFlyBehavior } from "./04-NoFlyBehavior";

let wildDuck = new WildDuck();
wildDuck.fly();

let toyDuck = new ToyDuck();
toyDuck.fly();

let pekingDuck = new PekingDuck();
pekingDuck.fly();

// 动态改变某个对象的行为,北京鸭 不能飞
pekingDuck.setFlyBehavior(new NoFlyBehavior);
console.log("北京鸭的实际飞翔能力");
pekingDuck.fly();

