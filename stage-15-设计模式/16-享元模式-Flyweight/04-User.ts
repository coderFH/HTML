class User {
    private name : string = "";

    set setName(name : string) {
        this.name = name;
    }

    get getName() {
        return this.name;
    }
}

export {User}