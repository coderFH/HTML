import { Man } from "./04-Man";
import { Woman } from "./05-Woman";

abstract class Action {
    // 得到男性的测评
    abstract getManResutl(man : Man) : void;

    // 得到女性的测评
    abstract getWomanResult(woman : Woman) : void;

}

export {Action}