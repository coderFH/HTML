import { Command } from "./01-Command"
import { NoCommand } from "./08-NoCommand";

class RemoteController {
    // 按钮的命令数组
    onCommands : Array<Command>
    offCommands : Array<Command>

    // 执行撤销的命令
    undoCommand : Command;

    constructor() {
        this.onCommands = new Array<Command>(5);
        this.offCommands = new Array<Command>(5);

        for (let i = 0; i < 5; i++) {
            this.onCommands[i] = new NoCommand();
            this.offCommands[i] = new NoCommand();
        }
    }

    // 给我们的按钮设置你需要的命令
    setCommand(no: number,onCommand : Command,offCommand : Command) {
        this.onCommands[no] = onCommand;
        this.offCommands[no] = offCommand;
    }

    // 按下开按钮
    onButtonWasPushed(no : number) { // no 0
        // 找到你按下的开的按钮,并调用对应的方法
        this.onCommands[no].execute();
        //记录这次的操作,用于撤销
        this.undoCommand = this.onCommands[no];
    }

    // 按下关按钮
    offButtonWasPushed(no : number) { // no 1
        // 找到你按下的开的按钮,并调用对应的方法
        this.offCommands[no].execute();
        //记录这次的操作,用于撤销
        this.undoCommand = this.offCommands[no];
    }

    // 按下撤销按钮
    undoButtonWapPushed() {
        this.undoCommand.undo();
    }
}

export {RemoteController}