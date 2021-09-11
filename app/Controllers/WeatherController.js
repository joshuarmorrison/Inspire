import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


function _getWeather(){

}

export class WeatherController{
    constructor(){
        ProxyState.on("weather",_getWeather);
        weatherService.getWeather()
    }
    async getWeather(){
        await weatherService.getWeather()
    }
}