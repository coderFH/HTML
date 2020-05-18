import { SoyaMilk } from "./01-SoyaMilk";

//纯
class PureSoyaMilk extends SoyaMilk {
    addCondiments(): void {}

    customerWantCondiments () : boolean {
        return false;
    }
}

export {PureSoyaMilk}