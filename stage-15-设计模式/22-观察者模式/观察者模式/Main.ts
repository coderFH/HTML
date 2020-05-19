import { WeatherData } from "./05-WeatherData";
import { CurrentConditions } from "./03-CurrentConditions";
import { BaiduSite } from "./02-BaiduSite";

let weatherData = new WeatherData();
		
let currentConditions = new CurrentConditions();
let baiduSite = new BaiduSite();

weatherData.registerObserver(currentConditions);
weatherData.registerObserver(baiduSite);

weatherData.setData(10, 100, 30.3);
weatherData.removeObserver(currentConditions);


weatherData.setData(20, 150, 35.3);