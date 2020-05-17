import { User } from "./04-User";

abstract class WebSite {
    abstract use(user : User) : void;
}

export {WebSite}