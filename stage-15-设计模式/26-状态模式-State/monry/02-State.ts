import { Context } from "./10-Context";

// 状态接口
interface State {

    // 电审
    checkEvent(context : Context) : void;

    // 电审失败
    checkFailEvent(context : Context) : void; 

    // 定价发布
    makePriceEvent(context : Context) : void;

    // 接单
    acceptOrderEvent(context : Context) : void;

    // 无人接单失效
    notPeopleAcceptEvent(context : Context) : void;
     
    // 付款
    payOrderEvent(context : Context) : void;

    // 接单有人支付失效
    orderFailureEvent(context : Context) : void;

    // 反馈
    feedBackEvent(context : Context) : void; 

    getCurrentState() : number;
}

export {State}