import {Coffee} from './02-Coffee'

// 美式咖啡
class LongBlack extends Coffee {
    constructor() {
        super();
        this.setDes("美式咖啡");
        this.setPrice(5);
    }
}

export {LongBlack}