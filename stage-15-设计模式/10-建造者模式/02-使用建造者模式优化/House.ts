//产品->Product
class House {
    private baise : string;  // 地基
    private wall : string;   // 墙
    private roofed : string; //封顶

    set setBaise(baise : string) {
        this.baise = baise;
    }
    get getBaise() : string {
        return this.baise;
    }

    set setWall(wall : string) {
        this.wall = wall;
    }
    get getWall() : string {
        return this.wall;
    }

    set setRoofed(roofed : string) {
        this.roofed = roofed;
    }
    get getRoofed() : string {
        return this.roofed;
    }
}

export {House}