class Progector {
    private constructor() {}

    private static instance = new Progector();

    public static getInstance() : Progector {
        return this.instance;
    }

    on() : void {
        console.log("Progector on"); 
    }

    off() : void {
        console.log("Progector off");  
    }

    fcous() : void {
        console.log("Progector is focus");
    }
}

export {Progector}