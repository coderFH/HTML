import {HouseBuilder} from './HouseBuilder'

class HighBuilding extends HouseBuilder {
    buildBasic(): void {
        this.house.setBaise = "地基打100米";
        console.log("高楼打地基"); 
    }
    buildWall(): void {
        this.house.setWall = "墙的厚度10米";
        console.log("高楼打砌墙");
    }
    roofed(): void {
        this.house.setRoofed = "顶部透明";
        console.log("高楼打封顶");
    }
}

export {HighBuilding}