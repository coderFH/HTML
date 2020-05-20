import { Memento } from "./02-Memento";

class GameRole {
    vit : number;
    def : number;
    
    //创建 Memento ,即根据当前的状态得到 Memento
    createMemento() : Memento {
        return new Memento(this.vit,this.def);
    }

    // 从备忘录对象，恢复 GameRole 的状态
    recoverGameRoleFromMemento(memento : Memento) {
        this.vit = memento.vit;
        this.def = memento.def;
    }

    // 显示当前游戏角色的状态
    display() : void {
        console.log("游戏角色当前的攻击力:" + this.vit + " 防御力: " + this.def);
    }
}

export {GameRole}