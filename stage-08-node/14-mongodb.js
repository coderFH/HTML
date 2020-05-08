/*

mongoDB的基本指令
	show dbs
		显示当前所有的数据库
	use 数据库名
		进入到指定数据库中
	db
		显示当前所在的数据库
	show collections
		显示数据库中的所有集合

========= 1.创建并进入it_like数据库
use it_like


========= 2.向数据库的colleges集合中插入六个文档(Html5, Java, Python, 区块链, K12, <PHP, "世界上最好的编程语言">)
db.colleges.insert([
    {name:'Html5'},
    {name:'Java'},
    {name:'Python'},
    {name:'区块链'},
    {name:'PHP',intro:'世界上最好的编程语言'}
]);


========= 3.查询colleges集合中的文档
db.colleges.find({})
{}代表查找所有


========= 4.向数据库的colleges集合中插入一个文档(Golang)
db.colleges.insert([
    {name:'Golang'},
    {name:'K12'}
]);


========= 5.统计数据库colleges集合中的文档数量
db.colleges.find().count()


========= 6.查询数据库colleges集合中name为Html5的文档
db.colleges.find({name:'Html5'})


========= 7.向数据库colleges集合中的name为Html5的文档，添加一个intro属性，属性值为"打通全栈任督二脉!"
db.colleges.update(
    {name:'Html5'},{$set:{intro:'打通全栈任督二脉'}}
)


========= 8.使用{name:"大数据"} 替换 name 为 "K12"的文档

replaceOne:替换一条

db.colleges.replaceOne(
    {name:'K12'},{name:'大数据'}
)


========= 9.删除name为PHP的文档的intro属性

1 代表任意的东西

db.colleges.update(
    {name:'PHP'},{$unset:{intro:1}}
)


========= 10.向name为Html5的文档中，添加一个classes:{base:["h5+c3","js","jQuery", "abc"] , core:["三大框架","node.js"]}
db.colleges.update(
    {name:'Html5'},{$set:{classes:{base:["h5+c3","js","jQuery", "abc"] , core:["三大框架","node.js"]}}}
)


========= 11.查询有核心课程为 三大框架 的文档
db.colleges.find(
    {'classes.core' : '三大框架'}
)

========= 12.向name为Html5的文档中，添加一个新的核心课程 "微信小程序"

$push 用于向数组中添加一个新元素
$addToSet  用于向数组中添加一个新元素,如果数组中存在了这个元素,则不会添加

db.colleges.update(
    {name:'Html5'},{$push:{'classes.core':'微信小程序'}}
)
//或者 使用下边的方式
db.colleges.update(
    {name:'Html5'},{$addToSet:{'classes.core':'rect'}}
)



========= 13.删除基础课程"abc"的html5文档
db.colleges.remove(
    {'classes.base':'abc'}
)


========= 14.删除colleges集合
db.colleges.remove({})

========= 15.删除数据库
db.colleges.drop();


========= 15.向集合中中插入10000个文档
use it_demo
方式1:
for(var i=0;i<10000;i++){
    db.demos.insert({no:i})
}
db.demos.find()
先删除下
db.demos.remove({})
方式2:
var arr = [];
for(var i=0;i<10000;i++) {
    arr.push({nos:i});
}
db.demos.insert(arr);

========= 16.查询demos中counter为666的文档
var arr = [];
for(var i=0;i<10000;i++) {
    arr.push({counter:i});
}
db.demos.insert(arr);
db.demos.find({counter:666})

========= 17.查询demos中counter小于168的文档
db.demos.find({counter:{$lt:168}})

========= 18.查询demos中counter大于666的文档
db.demos.find({counter:{$gt:168}})

========= 19.查询demos中counter大于66小于666的文档
db.demos.find({counter:{$lt:666,$gt:66}})

========= 20.查看demos集合中的前10条数据
方式1:
db.demos.find({counter:{$lte:10}})
方式2:
db.demos.find({}).limit(10)

========= 21.查看demos集合中的第11条到20条数据
分页 每页显示10条
1-10  1
11-20 2
21-30 3
skip( (页码-1) * 每页显示的条数).limit()

db.demos.find({}).skip(10).limit(10)

========= 22.查看demos集合中的第21条到30条数据
db.demos.find({}).skip(20).limit(10)


========= 23. 创建company数据库, 将section集合导入到数据库中
use company
db.con.insert(
[
   {cno: "1001", cname: "HTML5学院"},
   {cno: "1002", cname: "Python学院"},
   {cno: "1003", cname: "Java学院"},
   {cno: "1004", cname: "Go学院"}
])

db.section.insert(
[
  {name: "胡雪", job: "辅导员", wages: 10000.0, cno: "1001", bonus: 1688},
  {name: "赵乐乐", job: "讲师", wages: 20000.0, cno: "1001", bonus: 2600},
  {name: "冯璐璐", job: "辅导员", wages: 12000.0, cno: "1001"},
  {name: "赵晓雪", job: "辅导员", wages: 12000.0, cno: "1002", bonus: 1688},
  {name: "孙芙蓉", job: "讲师", wages: 13000.0, cno: "1002", bonus: 1288},
  {name: "胡霍恋", job: "辅导员", wages: 11000.0, cno: "1003", bonus: 2688},
  {name: "张思琪", job: "班主任", wages: 9000.0, cno: "1003"},
  {name: "王红叶", job: "辅导员", wages: 8000.0, cno: "1002", bonus: 1675},
  {name: "叶子奇", job: "高级讲师", wages: 30000.0, cno: "1001", bonus: 2345},
  {name: "高伟伟", job: "辅导员", wages: 17000.0, cno: "1002", bonus: 1345}
])

========= 24.查询HTML5学院的所有老师
var cno = db.con.findOne({cname: "HTML5学院"}).cno
db.section.find({cno:cno})


========= 25.查询Java学院的所有员工

========= 26.查询工资大于20000的员工
db.section.find({wages:{$gt:20000}})


========= 27.查询工资在10000-20000之间的员工
db.section.find({wages:{$lt:20000,$gt:10000}})

========= 28.查询工资小于10000或大于25000的员工
db.section.find({$or:[{wages:{$lt:10000}},{wages:{$gt:25000}}]})

========= 29.为所有薪资低于10000的员工增加工资1000元
db.section.updateMany({wages:{$lte:10000}},{$inc:{wages:1000}})

*/
