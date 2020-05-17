import {Decorator} from './01-Decorator'
import { Drink } from "../Coffee/01-Drink";

// 具体的Decorator,这里是调味品
class Milk extends Decorator {
    constructor(obj : Drink) {
        super(obj);
        this.setDes("牛奶调味品");
        this.setPrice(2); 
    }
}

export {Milk}