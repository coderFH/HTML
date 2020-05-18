import { LightReceiver } from "./04-LightReceiver";
import { LightOnCommand } from "./03-LightOnCommand";
import { LightOffCommand } from "./02-LightOffCommand";
import { RemoteController } from "./09-RemoteController";
import { TVReceiver } from "./07-TVReceiver";
import { TVOnCommand } from "./05-TVOnCommand";
import { TVOffCommand } from "./06-TVOffCommand";

// 使用命令模式,完成通过遥控器,对电灯的操作
// 创建电灯的对象(接受者)
let lightReceiver = new LightReceiver();

// 创建电灯相关的开关命令
let lightOnCommand = new LightOnCommand(lightReceiver);
let lightOffCommand = new LightOffCommand(lightReceiver);

// 创建一个遥控器
let remoteController = new RemoteController();

// 给我们的遥控器设置命令,比如no=0 是电灯的开和关的操作
remoteController.setCommand(0,lightOnCommand,lightOffCommand);

console.log("------ 按下灯的开按钮 ------");
remoteController.onButtonWasPushed(0);

console.log("------ 按下灯的关按钮 ------");
remoteController.offButtonWasPushed(0);

console.log("------ 按下撤销按钮 ------");
remoteController.undoButtonWapPushed();

console.log("=========使用遥控器操作电视机==========");
let tvReceiver = new TVReceiver();

// 创建电灯相关的开关命令
let tvOnCommand = new TVOnCommand(tvReceiver);
let tvOffCommand = new TVOffCommand(tvReceiver);

// 给我们的遥控器设置命令,比如no=1 是电视的开和关的操作
remoteController.setCommand(1,tvOnCommand,tvOffCommand);

console.log("------ 按下电视的开按钮 ------");
remoteController.onButtonWasPushed(1);

console.log("------ 按下电视的关按钮 ------");
remoteController.offButtonWasPushed(1);

console.log("------ 按下撤销按钮 ------");
remoteController.undoButtonWapPushed();
