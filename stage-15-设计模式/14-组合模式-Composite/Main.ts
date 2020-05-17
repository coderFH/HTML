import { University } from "./02-University";
import { College } from "./03-College";
import { Department } from "./04-Department";

// 从大到小创建对象
//创建大学
let university = new University("清华大学","厚德载物 自强不息");

// 创建学院
let computerCollege = new College("计算机学院","王牌学院");
let infoEngineerCollege = new College("信息工程学院","老牌学院");

// 创建专业
computerCollege.add(new Department("软件工程","软件工程不错"));
computerCollege.add(new Department("计算机科学与技术","老牌专业"));
computerCollege.add(new Department("网络工程","网络工程不错"));

infoEngineerCollege.add(new Department("通信工程","通信工程不好学"));
infoEngineerCollege.add(new Department("信息工程","信息工程"));

// 将学院加入学校
university.add(computerCollege);
university.add(infoEngineerCollege);


// 看下大学里有多少个学院
university.printf();

console.log("==============================");

// 看看某个学院有多少专业
computerCollege.printf();