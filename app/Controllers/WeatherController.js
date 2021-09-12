import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawWeather(){

    // @ts-ignore
    document.getElementById("weatherzone").innerHTML = ProxyState.weather.Template
}


export class WeatherController{
    constructor(){
        ProxyState.on("weather",_drawWeather);
        this.getWeather()
    }
    async getWeather(){
        await weatherService.getWeather()
        console.log(ProxyState.weather)
    }
}