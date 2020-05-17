import {Decorator} from './01-Decorator'
import { Drink } from "../Coffee/01-Drink";

// 具体的Decorator,这里是调味品
class Soy extends Decorator {
    constructor(obj : Drink) {
        super(obj);
        this.setDes("豆浆调味品");
        this.setPrice(1.5); 
    }
}

export {Soy}