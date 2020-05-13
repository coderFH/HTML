import {HouseBuilder} from './HouseBuilder'

class CommonHouse extends HouseBuilder {
    buildBasic(): void {
        this.house.setBaise = "地基打10米";
        console.log("普通房子打地基"); 
    }
    buildWall(): void {
        this.house.setWall = "墙的厚度3米";
        console.log("普通房子打砌墙");
    }
    roofed(): void {
        this.house.setRoofed = "水泥顶";
        console.log("普通房子打封顶");
    }
}

export {CommonHouse}