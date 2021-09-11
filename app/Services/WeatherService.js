import { ProxyState } from "../AppState.js";

// @ts-ignore
const weatherApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/weather"
})
class WeatherService {
    constructor(){

    }
    async getWeather(){
        let res = await weatherApi.get('weather')
        ProxyState.weather= res.data.weather
    }
}
export const weatherService = new WeatherService();