// 枚举状态类
enum StateEnum {
    GENERATE = 1,   //订单生成
    REVIEWED,       // 已审核
    PUBLISHED,      // 已发布
    NOT_PAY,        // 待付款
    PAID,           // 已付款
    FEED_BACKED,    // 已完结
}

export {StateEnum}