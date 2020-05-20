import { State } from "./01-State"
import { RaffleActivity } from "./06-RaffleActivity";

// 发放奖品的状态
class DispenseState extends State {
    activity : RaffleActivity
 
    constructor(activity : RaffleActivity) {
        super();
        this.activity = activity;
    }

    deductMoney(): void {
        console.log("不能扣除积分");
    }

    raffle(): boolean {
       console.log("不能抽奖"); 
       return false;
    }

    dispensePrize(): void {
        if (this.activity.getCount() > 0) {
            console.log("恭喜中奖了");
            //改变状态为不能抽奖
            this.activity.setState(this.activity.getNoRafflleState());
        } else {
            console.log("很遗憾,奖品发放完了");
            // 改变状态为奖品发送完毕,后面我们就不可以抽奖
            this.activity.setState(this.activity.getDispensOutState());
        }
    }
}

export {DispenseState}