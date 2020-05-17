import { TeacherDao } from "./02-TeacherDao";
import { TeacherDaoProxy } from "./03-TeacherDaoProxy";

// 创建目标对象
let teacherDao = new TeacherDao();

// 创建代理对象，同时将被代理对象传递给代理对象
let teacherDaoProxy = new TeacherDaoProxy(teacherDao);

// 通过代理对象，调用被代理对象的方法
// 即执行的是代理对象的方法，代理对象再去调用目标对象的方法
teacherDaoProxy.teach();
