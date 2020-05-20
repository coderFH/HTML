import { College } from "./04-College";
import { ComputerCollege } from "./05-ComputerCollege";
import { InfoCollege } from "./06-InfoCollege";
import { OutPutImpl } from "./08-OutPutImpl";

// 创建学院
let collegeList = new Array<College>();

let computerCollege = new ComputerCollege();
let infoCollege = new InfoCollege();

collegeList.push(computerCollege);
collegeList.push(infoCollege);

let outPutImpl = new OutPutImpl(collegeList);
outPutImpl.printCollege();

