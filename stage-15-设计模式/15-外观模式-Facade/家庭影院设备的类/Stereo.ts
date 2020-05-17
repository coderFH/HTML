// 立体声类
class Stereo {
    private constructor() {}

    private static instance = new Stereo();

    public static getInstance() : Stereo {
        return this.instance;
    }

    on() : void {
        console.log("Stereo on"); 
    }

    off() : void {
        console.log("Stereo off");  
    }

    up() : void {
        console.log("Stereo vioce up");
    }

    down() : void {
        console.log("Stereo voice down");
    }
}

export {Stereo}