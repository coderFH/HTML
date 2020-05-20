import { PurchaseRequest } from "./06-PurchaseRequest";
import { DepartmentApprover } from "./02-DepartmentApprover";
import { CollegeApprover } from "./03-CollegeApprover";
import { ViceSchoolMasterApprover } from "./04-ViceSchoolMasterApprover";
import { SchoolMasterApprover } from "./05-SchoolMasterApprover";

// 创建一个请求
let purchaseRequest = new PurchaseRequest(1,200000,1);

//创建相关的审批人
let departmentApprover = new DepartmentApprover("张主任");
let collegeApprover = new CollegeApprover("李院长");
let viceSchoolMasterApprover = new ViceSchoolMasterApprover("白副校");
let schoolMasterApprover = new SchoolMasterApprover("王校长");

//需要将各个审批级别的下一个设置好 (处理人构成环形: )
departmentApprover.setApporver(collegeApprover);
collegeApprover.setApporver(viceSchoolMasterApprover); 
viceSchoolMasterApprover.setApporver(schoolMasterApprover); 
schoolMasterApprover.setApporver(departmentApprover);

departmentApprover.processRequests(purchaseRequest);
