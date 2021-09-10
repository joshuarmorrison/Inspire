import { ProxyState } from "../AppState.js";
// @ts-ignore
const bgimageApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api"

})
class BackgroundService  {

  constructor(){

  }
  async getBackgroundImage(){
    let res = await bgimageApi.get('images')
    ProxyState.bgimage = res.data.largeImgUrl
  }
}

export const backgroundService = new BackgroundService();