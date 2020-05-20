import { State } from "./01-State"
import { RaffleActivity } from "./06-RaffleActivity"

// 可以抽奖的状态
class CanRaffleState extends State {
    activity : RaffleActivity
 
    constructor(activity : RaffleActivity) {
        super();
        this.activity = activity;
    }

    // 已经扣除了积分,不能再扣
    deductMoney(): void {
        console.log("已经扣除了积分,不能再扣");
    }

    // 可以抽奖,抽完奖后,根据实际情况,改变新的状态
    raffle(): boolean {
        console.log("正在抽奖,请稍后!");
        let num =  Math.round(Math.random()*10);
        // 10%中奖机会
        if (num === 0) {
            // 改变活动状态为发放奖品
            this.activity.setState(this.activity.getDispensOutState());
            return true;
        } else {
            console.log("很遗憾没有抽中奖品!");
            // 改变状态为不能抽奖
            this.activity.setState(this.activity.getNoRafflleState());
            return false;
        }  
    }

    // 不能发放奖品
    dispensePrize(): void {
        console.log("没有中奖,不能发放奖品");
    }
}

export {CanRaffleState}