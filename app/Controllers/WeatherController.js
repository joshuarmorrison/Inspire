import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawWeather(){

    // @ts-ignore
    document.getElementById("weatherzone").innerHTML = ProxyState.weather.Template
}

function _tempConverter(temp){
    let newtemp = Math.round(((temp - 273.15)*1.8)+32)
    // @ts-ignore
    ProxyState.weather.temp = newtemp
    ProxyState.weather = ProxyState.weather 
    
}

export class WeatherController{
    constructor(){
        ProxyState.on("weather",_drawWeather);
        this.getWeather()
        _tempConverter()
    }
    async getWeather(){
        await weatherService.getWeather()
        
        // @ts-ignore
        let temp = ProxyState.weather.temp
        _tempConverter(temp)
    }
    tempConverter(){
        // @ts-ignore
        if (ProxyState.weather.type == false){
            // @ts-ignore
            ProxyState.weather.type = true
            ProxyState.weather = ProxyState.weather

            // @ts-ignore
            let farenheit = ProxyState.weather.temp 
            let celcius = Math.round(((farenheit-32)*5)/9)

            // @ts-ignore
            ProxyState.weather.temp = celcius
            ProxyState.weather = ProxyState.weather
        // @ts-ignore
        } else if (ProxyState.weather.type == true){
            // @ts-ignore
            ProxyState.weather.type = false
            ProxyState.weather = ProxyState.weather

            // @ts-ignore
            let celcius = ProxyState.weather.temp
            let farenheit = Math.round((celcius * 1.8)+ 32)

            // @ts-ignore
            ProxyState.weather.temp = farenheit
            ProxyState.weather = ProxyState.weather
        }
    }
}
