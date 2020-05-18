// 创建命令接口
interface Command {
    //执行动作(操作)
    execute() : void;

    //撤销动作(操作)
    undo() : void;
}

export {Command}