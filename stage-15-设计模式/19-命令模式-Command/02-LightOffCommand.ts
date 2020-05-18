import { Command } from "./01-Command";
import { LightReceiver } from "./04-LightReceiver";

class LightOffCommand implements Command {
    light : LightReceiver;

    constructor(light : LightReceiver) {
        this.light = light;
    }

    execute(): void {
        this.light.off();
    }
    
    undo(): void {
        this.light.on();
    }
    
}

export {LightOffCommand}