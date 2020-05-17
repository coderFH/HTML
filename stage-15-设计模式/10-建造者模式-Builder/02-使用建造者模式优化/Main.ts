import { HouseDirector } from "./HouseDirector";
import { CommonHouse } from "./CommonHoues";
import { HighBuilding } from "./HighBuilding";

//盖普通房子
let commonHouse = new CommonHouse();
// 准备创建房子的指挥者
let houseDirector = new HouseDirector(commonHouse);
//完成盖房子,返回产品(房子)
let house = houseDirector.constructorHouse();
console.log(house.getBaise);
console.log(house.getWall);
console.log(house.getRoofed);

console.log('----------');

//盖高楼
let highBuilding = new HighBuilding();
// 重置建造者
houseDirector.setHouseBuilder = highBuilding;
//完成盖房子,返回产品(房子)
let house1 = houseDirector.constructorHouse();
console.log(house1.getBaise);
console.log(house1.getWall);
console.log(house1.getRoofed);
