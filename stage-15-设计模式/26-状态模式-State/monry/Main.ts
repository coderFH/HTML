import { Context } from "./10-Context";
import { PublishState } from "./07-PublishState";

//创建 context 对象
let context = new Context();


//将当前状态设置为 PublishState
context.state = new PublishState();
console.log(context.getCurrentState());

//publish --> not pay
context.acceptOrderEvent(context);

//not pay --> paid
context.payOrderEvent(context);

// 失败, 检测失败时，会抛出异常
try {
    context.checkFailEvent(context);
    console.log("流程正常");
} catch(e) {
    console.log(e);
}
