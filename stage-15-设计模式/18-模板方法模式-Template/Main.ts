import { RedBeanSoyaMilk } from "./02-RedBeanSoyaMilk";
import { PeanutSoyaMilk } from "./03-PeanutSoyaMilk";
import { PureSoyaMilk } from "./04-pureSoyaMilk";

// 制作红豆豆浆
console.log("----制作红豆豆浆----");
let redBeanSoyaMilk = new RedBeanSoyaMilk();
redBeanSoyaMilk.make();

// 制作花生豆浆
console.log("----制作花生豆浆----");
let peanutSoyaMilk = new PeanutSoyaMilk();
peanutSoyaMilk.make();

// 制作纯豆浆
console.log("----制作纯豆浆----");
let pureSoyaMilk = new PureSoyaMilk();
pureSoyaMilk.make();
