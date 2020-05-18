import { Command } from "./01-Command";
import { TVReceiver } from "./07-TVReceiver";

class TVOffCommand implements Command {
    tvReceiver : TVReceiver;

    constructor(tvReceiver : TVReceiver) {
        this.tvReceiver = tvReceiver;
    }

    execute(): void {
        this.tvReceiver.off();
    }
    
    undo(): void {
        this.tvReceiver.on();
    }
}

export {TVOffCommand}