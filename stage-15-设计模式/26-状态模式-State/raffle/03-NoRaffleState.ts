import { State } from "./01-State"
import { RaffleActivity } from "./06-RaffleActivity";

// 不能抽奖状态
class NoRaffleState extends State {
    activity : RaffleActivity
 
    constructor(activity : RaffleActivity) {
        super();
        this.activity = activity;
    }

    // 当前状态可以扣积分 , 扣除后，将状态设置成可以抽奖状态
    deductMoney(): void {
        console.log("扣除 50 积分成功，您可以抽奖了");
        this.activity.setState(this.activity.getCanRaffleState());
    }

    // 当前状态不能抽奖
    raffle(): boolean {
        console.log("扣了积分才能抽奖喔!");
        return false;
    }

    // 当前状态不能发奖品
    dispensePrize(): void {
        console.log("不能发放奖品");
    }
}

export {NoRaffleState}