import { Action } from "./01-Action";
import { Man } from "./04-Man";
import { Woman } from "./05-Woman";

class Fail extends Action  {
    getManResutl(man: Man): void {
        console.log("男人给的评价该歌手失败");
    }

    getWomanResult(woman: Woman): void {
        console.log("女人给的评价该歌手失败");
    }
}

export {Fail}