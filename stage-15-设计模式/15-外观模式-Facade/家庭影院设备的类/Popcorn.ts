// 爆米花类
class Popcorn {
    private constructor() {}

    private static instance = new Popcorn();

    public static getInstance() : Popcorn {
        return this.instance;
    }

    on() : void {
        console.log("popcorn on");
    }

    off() : void {
        console.log("popcorn off"); 
    }

    pop() : void {
        console.log("popcorn is poping");
    }
}

export {Popcorn}