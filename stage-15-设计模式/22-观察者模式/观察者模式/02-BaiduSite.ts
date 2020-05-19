import { Observer } from "./01-Observer";

class BaiduSite implements Observer {
    // 温度,气压,湿度
    private temperature : number;
    private pressure : number;
    private humidity : number;

    update(temperature: number, pressure: number, humidity: number): void {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        this.display();
    }

    display() : void {
        console.log("***今天 温度: " + this.temperature + "***");
        console.log("***今天 气压: " + this.pressure + "***");
        console.log("***今天 湿度: " + this.humidity + "***");
    }
}

export {BaiduSite}