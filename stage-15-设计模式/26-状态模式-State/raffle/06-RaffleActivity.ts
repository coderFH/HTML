import { State } from "./01-State"
import { CanRaffleState } from "./02-CanRaffleState";
import { NoRaffleState } from "./03-NoRaffleState";
import { DispenseState } from "./04-DispenseState";
import { DispenseOutState } from "./05-DispenseOutState";

class RaffleActivity {
    // state 表示活动当前的状态,是变化的
    state : State = null;

    // 奖品数量
    count : number = 0;

    // 四种属性,表示四种状态
    noRafflleState : NoRaffleState;
    canRaffleState : CanRaffleState;
    dispenseState : DispenseState;
    dispensOutState : DispenseOutState;

    //构造器
    //1. 初始化当前的状态为 noRafflleState(即不能抽奖的状态) 
    //2. 初始化奖品的数量
    constructor(count : number) {
        this.noRafflleState = new NoRaffleState(this);
        this.canRaffleState = new CanRaffleState(this);
        this.dispenseState = new DispenseState(this);
        this.dispensOutState = new DispenseOutState(this);

        this.state = this.getNoRafflleState();
        this.count = count;
    }

    // 扣分, 调用当前状态的 deductMoney
    debuctMoney() : void {
        this.state.deductMoney();
    }

    //抽奖
    raffle() : void {
        // 如果当前的状态是抽奖成功
        if (this.state.raffle()) {
            // 领取奖品
            this.state.dispensePrize();
        }
    }

    getState() : State {
        return this.state;
    }

    public setState(state : State) : void {
        this.state = state;
    }

    // 这里请注意，每领取一次奖品，count--
    getCount() {
        let curCount = this.count;
        this.count--;
        return curCount;
    }

    getNoRafflleState() : State {
        return this.noRafflleState;
    }

    // setNoRafflleState(noRafflleState : State) : void {
    //     this.noRafflleState = noRafflleState;
    // }

    getCanRaffleState() : State  {
        return this.canRaffleState;
    }

    // setCanRaffleState(canRaffleState : State) : void {
    //     this.canRaffleState = canRaffleState;
    // }

    getDispenseState() : State {
        return this.dispenseState;
    }

    // setDispenseState(dispenseState : State) : void {
    //     this.dispenseState = dispenseState;
    // }

    getDispensOutState() : State {
        return this.dispensOutState;
    }

    // setDispensOutState(dispensOutState : State) : void {
    //     this.dispensOutState = dispensOutState;
    // }
}

export {RaffleActivity}