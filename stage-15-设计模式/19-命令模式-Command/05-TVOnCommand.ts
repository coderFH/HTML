import { Command } from "./01-Command";
import { TVReceiver } from "./07-TVReceiver";

class TVOnCommand implements Command {
    tvReceiver : TVReceiver;

    constructor(tvReceiver : TVReceiver) {
        this.tvReceiver = tvReceiver;
    }

    execute(): void {
        this.tvReceiver.on();
    }
    
    undo(): void {
        this.tvReceiver.off();
    }
}

export {TVOnCommand}