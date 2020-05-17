import {Coffee} from './02-Coffee'

// 浓缩咖啡
class ShortBlack extends Coffee {
    constructor() {
        super();
        this.setDes("浓缩咖啡");
        this.setPrice(3);
    }
}

export {ShortBlack}