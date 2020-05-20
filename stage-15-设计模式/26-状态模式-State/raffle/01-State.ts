//状态抽象类
abstract class State {
	// 扣除积分 - 50
    abstract deductMoney() : void;

    // 是否抽中奖品
    abstract raffle() : boolean;

    // 发放奖品
    abstract dispensePrize() : void;
}

export {State}