import { Approver } from "./01-Approver";
import { PurchaseRequest } from "./06-PurchaseRequest";

class SchoolMasterApprover extends Approver {
    constructor(name : string) {
        super(name);
    }


    processRequests(purchaseRequest: PurchaseRequest) {
        if(purchaseRequest.price > 30000) {
            console.log("请求编号 id= " + purchaseRequest.id + " 被 " + this.name + " 处理"); 
        } else {
            this.approver.processRequests(purchaseRequest);
        }
    }
    
}

export {SchoolMasterApprover}