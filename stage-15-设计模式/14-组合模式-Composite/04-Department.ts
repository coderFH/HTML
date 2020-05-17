import {OrgizationComponent} from './01-OrgizationComponent'

class Department extends OrgizationComponent {

    constructor(name : string,des : string) {
        super(name,des);
    }

    //add,remove就不需要写了,因为他是叶子节点

    getName() : string {
        return super.getName();
    }

    getDes() : string {
        return super.getDes();
    }

    printf(): void {
        console.log(this.getName() + "   "+  this.getDes());
    }
}

export {Department}