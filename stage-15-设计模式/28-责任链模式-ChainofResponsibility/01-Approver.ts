import { PurchaseRequest } from "./06-PurchaseRequest";

abstract class Approver {
    approver : Approver; // 下一个处理者
    name : string; // 名字

    constructor(name : string) {
        this.name = name;
    }

    // 下一个处理者
    setApporver(approver : Approver) {
        this.approver = approver;
    }

    //处理审批请求的方法，得到一个请求, 处理是子类完成，因此该方法做成抽象
    abstract processRequests(purchaseRequest : PurchaseRequest);
}

export {Approver}