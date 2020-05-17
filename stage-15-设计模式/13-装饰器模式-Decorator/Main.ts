// 装饰者模式下的订单: 2份巧克力+1份牛奶 的 LongBlack

import { LongBlack } from "./Coffee/03-LongBlack";
import { Milk } from "./Decorator/Milk";
import { Chocolate } from "./Decorator/Chocolate";

//1.点一份LongBlack
let order = new LongBlack();
console.log("点了一份美式咖啡的价格: " + order.cost());
console.log("点了一份美式咖啡的描述: " + order.getDes());

// //2. 加入一份牛奶
order = new Milk(order);
console.log("加入一份牛奶费用: " + order.cost());
console.log("加入一份牛奶描述: " + order.getDes());

// //3. 加入一份巧克力
order = new Chocolate(order);
console.log("加入一份巧克力 一份牛奶费用: " + order.cost());
console.log("加入一份巧克力 一份牛奶描述: " + order.getDes());

// //4. 再加入一份巧克力
order = new Chocolate(order);
console.log("加入二份巧克力 一份牛奶费用: " + order.cost());
console.log("加入二份巧克力 一份牛奶描述: " + order.getDes());