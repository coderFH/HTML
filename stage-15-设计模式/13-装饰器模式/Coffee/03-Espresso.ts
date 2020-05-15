import {Coffee} from './02-Coffee'

// 意大利咖啡
class Espresso extends Coffee {
    constructor() {
        super();
        this.setDes("意大利咖啡");
        this.setPrice(6);
    }
}

export {Espresso}