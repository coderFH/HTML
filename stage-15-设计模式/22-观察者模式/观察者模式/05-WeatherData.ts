import { Subject } from "./04-Subject";
import { Observer } from "./01-Observer";

class WeatherData implements Subject {
    private temperature : number;
    private pressure : number;
    private humidity : number;

    private observers : Array<Observer>

    constructor() {
        this.observers = new Array<Observer> ();
    }

    getTemperature() : number {
        return this.temperature;
    }

    getPressure() : number {
        return this.pressure;
    }

    getHumidity() : number {
        return this.humidity;
    }

    dataChange() {
        this.notifyObservers();
    }

    //当数据有更新时，就调用 setData
    setData(temperature : number,pressure : number, humidity : number) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;

        // 用 dataChange， 将最新的信息 推送给 接入方 currentConditions
        this.dataChange();
    }

    registerObserver(o : Observer): void {
        this.observers.push(o)
    }
    removeObserver(o : Observer): void {}

    notifyObservers(): void {
        for (let i = 0; i < this.observers.length; i++) {
            this.observers[i].update(this.temperature,this.pressure,this.humidity);
        }
    }
}

export {WeatherData}