import { IteacherDao } from "./01-ITeacherDao";

class TeacherDao implements IteacherDao  {
    teach() : void {
        console.log("老师授课中。。。。。");
    }
}

export {TeacherDao}