import { ProxyState } from "../AppState.js";
import {quotes} from "../Models/Quotes.js"

// @ts-ignore
const quotesApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api"
})
class QuoteService {
    constructor(){

    }
    async getQuote(){
        let res = await quotesApi.get('quotes')
        // @ts-ignore
        ProxyState.quotes= new quotes(res.data)
    }
}
export const quoteService = new QuoteService();