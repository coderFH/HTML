import { IteacherDao } from "./01-ITeacherDao";

// 代理对象，静态代理
class TeacherDaoProxy implements IteacherDao  {
    private target : IteacherDao; // 目标对象，通过接口来聚合


    constructor(target : IteacherDao) {
        this.target = target;
    }

    teach() : void {
        console.log("代理开始");
        this.target.teach();
        console.log("代理结束");
    }
}

export {TeacherDaoProxy}