import {House} from './House'

//抽象的建造者
abstract class HouseBuilder {
    house = new House();

    //将建造好的流程写好,抽象的方法
    abstract buildBasic() : void;
    abstract buildWall() : void;
    abstract roofed() : void;

    // 建造房子
    buildHouse() : House {
        return this.house;
    }
}

export {HouseBuilder}
