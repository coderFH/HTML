import { Command } from "./01-Command";
import { LightReceiver } from "./04-LightReceiver";

class LightOnCommand implements Command {
    light : LightReceiver;

    constructor(light : LightReceiver) {
        this.light = light;
    }

    execute(): void {
        this.light.on();
    }
    
    undo(): void {
        this.light.off();
    }
}

export {LightOnCommand}