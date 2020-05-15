import {Decorator} from './01-Decorator'
import { Drink } from "../Coffee/01-Drink";

// 具体的Decorator,这里是调味品
class Chocolate extends Decorator {
    constructor(obj : Drink) {
        super(obj);
        this.setDes("巧克力调味品");
        this.setPrice(3); 
    }
}

export {Chocolate}