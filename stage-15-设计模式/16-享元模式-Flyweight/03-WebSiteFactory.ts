import { ConcreteWebSite } from "./02-ConcreteWebSite";
import { WebSite } from "./01-WebSite";

// 网站工厂类,根据一个需求,返回一个网站
class WebSiteFactory {
    //集合,充当池的使用
    private pool = new Map<string,ConcreteWebSite>();

    //根据网站类型,返回一个网站,如没有,就创建一个网站,并放入池中,并返回
    getWebsiteCategory(type : string) : WebSite {
        if(this.pool.has(type) === false) {
            //就创建一个网站,并放入池中
            this.pool.set(type,new ConcreteWebSite(type));
        }
        let w : ConcreteWebSite = this.pool.get(type)!;
        return w;
    }

    //获取网站分类的总数(池中有多少个网站类型)
    getWebSiteCount() : number {
        return this.pool.size;
    }
}

export {WebSiteFactory}