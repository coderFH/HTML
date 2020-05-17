class DVDPlayer {
    private constructor() {}

    private static instance = new DVDPlayer();

    public static getInstance() : DVDPlayer {
        return this.instance;
    }

    on() : void {
        console.log("dvd on"); 
    }

    off() : void {
        console.log("dvd off");  
    }

    play() : void {
        console.log("dvd playing");
    }

    pause() : void {
        console.log("dvd pause");
    }
}

export {DVDPlayer}