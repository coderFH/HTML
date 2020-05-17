import { WebSiteFactory } from "./03-WebSiteFactory";
import { User } from "./04-User";

//创建一个工厂类
let w = new WebSiteFactory();

//客户要一个以新闻形式发布的网站
let website1 = w.getWebsiteCategory("新闻");
let user1 = new User();
user1.setName = "tom";
website1.use(user1);

//客户要一个以博客形式发布的网站
let website2 = w.getWebsiteCategory("博客");
let user2 = new User();
user2.setName = "jack";
website2.use(user2);

//客户要一个以博客形式发布的网站
let website3 = w.getWebsiteCategory("博客");
let user3 = new User();
user3.setName = "rose";
website3.use(user3);

//客户要一个以博客形式发布的网站
let website4 = w.getWebsiteCategory("博客");
let user4 = new User();
user4.setName = "lily";
website4.use(user4);

//网站的分类一共的个数
console.log(w.getWebSiteCount());


