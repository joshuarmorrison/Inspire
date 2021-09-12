import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

function _drawQuote(){

    // @ts-ignore
    document.getElementById("quotes").innerHTML = ProxyState.quotes.Template
}


export class QuoteController{
    constructor(){
        ProxyState.on("quotes",_drawQuote);
        this.getWeather()
    }
    async getWeather(){
        await quoteService.getQuote()
        console.log(ProxyState.weather)
    }
}
