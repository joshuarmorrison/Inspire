import { ProxyState } from "../AppState.js";
import { Bgimage } from "../Models/BgImage.js";
// @ts-ignore
const bgimageApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api"

})
class BackgroundService  {

  constructor(){

  }
  async getBackgroundImage(){
    let res = await bgimageApi.get('images')
    ProxyState.bgimage = new Bgimage(res.data)
  }
}

export const backgroundService = new BackgroundService();