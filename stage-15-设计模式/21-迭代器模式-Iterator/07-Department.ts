class Department {
    private name : string;
    private des : string;

    constructor(name : string, des : string) {
        this.name = name;
        this.des = des;
    }

    setName(name : string) {
        return this.name = name;
    }

    getName() {
        return this.name;
    }

    setDes(des : string) {
        return this.des = des;
    }

    getDes() {
        return this.des;
    }
}

export {Department}
