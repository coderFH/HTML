import {Drink} from "./01-Drink"

class Coffee extends Drink {
    cost(): number {
        return super.getPrice();
    }
}

export {Coffee}