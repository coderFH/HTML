class Screen {
    private constructor() {}

    private static instance = new Screen();

    public static getInstance() : Screen {
        return this.instance;
    }

    up() : void {
        console.log("screen up"); 
    }

    down() : void {
        console.log("screen down");  
    }
}

export {Screen}