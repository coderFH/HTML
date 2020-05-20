import { WebSite } from "./01-WebSite";
import { User } from "./04-User";

class ConcreteWebSite extends WebSite {

    private type : string = ""; //网站发布的形式

    constructor(type : string) {
        super();
        this.type = type;
    }

    use(user : User): void {
        console.log("网站发布形式为: " + this.type + "在使用中....使用者是:" + user.getName);
    }
}

export {ConcreteWebSite}