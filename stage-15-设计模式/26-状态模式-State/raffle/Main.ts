import { RaffleActivity } from "./06-RaffleActivity";

// 创建活动对象,奖品有一个奖品
let activity = new RaffleActivity(1);

for (let i = 0; i < 30; i++) {
    console.log("--------第" + (i + 1) + "次抽奖----------");
    // 参加抽奖,第一步点击扣除积分
    activity.debuctMoney();
    
    // 第二部抽奖
    activity.raffle();
}