import {OrgizationComponent} from './01-OrgizationComponent'

class College extends OrgizationComponent {
    orgizationComponents = new Array<OrgizationComponent>();

    constructor(name : string,des : string) {
        super(name,des);
    }

    //重写add方法
    add(orgizationComponent : OrgizationComponent) {
        //将来实际业务中,College的add和University的add 不一定完全一样
        this.orgizationComponents.push(orgizationComponent);
    }

    //重写remove方法
    remove(orgizationComponent : OrgizationComponent) {
    }

    getName() : string {
        return super.getName();
    }

    getDes() : string {
        return super.getDes();
    }

    printf(): void {
        console.log("****" + this.getName() + "======"+ this.getDes() + "****");
        for (let i = 0; i < this.orgizationComponents.length; i++) {
            const element : OrgizationComponent = this.orgizationComponents[i];
            element.printf();
        }
    }
}

export {College}