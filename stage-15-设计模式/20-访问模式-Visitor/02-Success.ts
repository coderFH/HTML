import { Action } from "./01-Action";
import { Man } from "./04-Man";
import { Woman } from "./05-Woman";

class Success extends Action  {
    getManResutl(man: Man): void {
        console.log("男人给的评价该歌手成功");
    }

    getWomanResult(woman: Woman): void {
        console.log("女人给的评价该歌手成功");
    }   
}

export {Success}