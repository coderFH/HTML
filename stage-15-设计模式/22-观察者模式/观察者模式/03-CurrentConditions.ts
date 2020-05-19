import { Observer } from "./01-Observer";

class CurrentConditions implements Observer {
    // 温度,气压,湿度
    private temperature : number;
    private pressure : number;
    private humidity : number;

    // 更新天气情况,是由WeatherData来调用,使用推送模式
    update(temperature : number,pressure : number, humidity : number) {
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
export {CurrentConditions}