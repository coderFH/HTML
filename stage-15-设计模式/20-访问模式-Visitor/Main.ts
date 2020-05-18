import { ObjectStructure } from "./06-ObjectStructure";
import { Man } from "./04-Man";
import { Woman } from "./05-Woman";
import { Success } from "./02-Success";
import { Fail } from "./02-Fail";
import { Wait } from "./02-Wait";

// 创建ObjectStructure
let objectStructure = new ObjectStructure();

objectStructure.attach(new Man());
objectStructure.attach(new Woman());

// 成功
console.log("========= 给了成功的测评 ========");
let success = new Success();
objectStructure.display(success);

// 失败
console.log("========= 给了失败的测评 ========");
let failure = new Fail();
objectStructure.display(failure);

// 成功
console.log("========= 给了待定的测评 ========");
let wait = new Wait();
objectStructure.display(wait);