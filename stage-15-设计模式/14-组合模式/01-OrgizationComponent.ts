abstract class OrgizationComponent {
    private name : string; // 名字
    private des : string;  // 说明

    constructor(name : string,des : string) {
        this.name = name;
        this.des = des;
    }

    add(orgizationComponent : OrgizationComponent) {}

    remove(orgizationComponent : OrgizationComponent) {}

    getName() : string {
        return this.name;
    }

    setName(name : string) {
        this.name = name;
    }

    getDes() : string {
        return this.des;
    }

    setDes(des : string) {
        this.des = des;
    }

    abstract printf() : void;
}

export {OrgizationComponent}