import { ProxyState } from "../AppState.js";
import { weather } from "../Models/Weather.js";

// @ts-ignore
const weatherApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api"
})
class WeatherService {
    constructor(){

    }
    async getWeather(){
        let res = await weatherApi.get('weather')
        // @ts-ignore
        ProxyState.weather= new weather(res.data)
    }
}
export const weatherService = new WeatherService();