class CurrentConditions {
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

/**
* 类是核心
* 1. 包含最新的天气情况信息
* 2. 含有 CurrentConditions 对象
* 3. 当数据有更新时，就主动的调用CurrentConditions 对象 update 方法(含 display), 这样他们(接入方)就看到最新的信息
*/
class WeatherData {
    private temperature : number;
    private pressure : number;
    private humidity : number;

    private currentConditions : CurrentConditions;

    constructor(currentConditions : CurrentConditions) {
        this.currentConditions = currentConditions;
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
        // 调用 接入方的update
        this.currentConditions.update(this.getTemperature(),this.getPressure(),this.getHumidity());
    }

    //当数据有更新时，就调用 setData
    setData(temperature : number,pressure : number, humidity : number) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;

        // 用 dataChange， 将最新的信息 推送给 接入方 currentConditions
        this.dataChange();
    }
}

// 创建接入方 currentConditions
let currentConditions = new CurrentConditions();

// 创建 WeatherData 并将 接入方 currentConditions 传递到 WeatherData 中
let weatherData = new WeatherData(currentConditions);

// 更新天气情况
weatherData.setData(30,150,40);

// 天气情况变化 
console.log("============天气情况变化=============");
weatherData.setData(40, 160, 20);

export {}