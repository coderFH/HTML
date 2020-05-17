// 灯光类
class TheaterLight {
    private constructor() {}

    private static instance = new TheaterLight();

    public static getInstance() : TheaterLight {
        return this.instance;
    }

    on() : void {
        console.log("TheaterLight on"); 
    }

    off() : void {
        console.log("TheaterLight off");  
    }

    dim() : void {
        console.log("TheaterLight dim...");
    }

    bright() : void {
        console.log("TheaterLight bright...");
    }
}

export {TheaterLight}