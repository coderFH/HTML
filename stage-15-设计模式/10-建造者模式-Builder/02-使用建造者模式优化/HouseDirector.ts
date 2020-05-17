import { HouseBuilder } from "./HouseBuilder";
import { House } from "./House";

// 指挥者,这里去指定制作流程,
class HouseDirector {
    houseBuilder : HouseBuilder = null;

    //构造器传入
    constructor(houseBuilder : HouseBuilder) {
        this.houseBuilder = houseBuilder;
    }

    set setHouseBuilder(houseBuilder : HouseBuilder) {
        this.houseBuilder = houseBuilder;
    }
    
    //如何处理建房的流程,交给指挥者
    constructorHouse() : House {
        this.houseBuilder.buildBasic();
        this.houseBuilder.buildWall();
        this.houseBuilder.roofed();
        return this.houseBuilder.buildHouse();
    }

}

export {HouseDirector}