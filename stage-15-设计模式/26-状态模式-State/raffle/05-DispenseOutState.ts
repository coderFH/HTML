import { State } from "./01-State"
import { RaffleActivity } from "./06-RaffleActivity";

/*
    奖品发放完毕状态
    说明,当我们activity 改变成 DispenseOutstate,抽奖活动结束
*/
class DispenseOutState extends State {
    // 初始化时传入活动
    activity : RaffleActivity = null;
 
    constructor(activity : RaffleActivity) {
        super();
        this.activity = activity;
    }

    deductMoney(): void {
        console.log("奖品发送完了,请下次再参加");
    }

    raffle(): boolean {
        console.log("奖品发送完了,请下次再参加");
        return false;
    }

    dispensePrize(): void {
        console.log("奖品发送完了,请下次再参加");
    }
}

export {DispenseOutState}