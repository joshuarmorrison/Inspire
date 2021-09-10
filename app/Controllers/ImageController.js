import { ProxyState } from "../AppState.js";
import { backgroundService } from "../Services/BackgroundService.js";

function _draw(){
    document.getElementById('bgImage').style.backgroundImage = `url(${ProxyState.bgimage})`
    console.log(ProxyState.bgimage);
}




export class ImageController{
    constructor(){
        ProxyState.on("bgimage",_draw);
        backgroundService.getBackgroundImage()
    }
    async getBackgroundImage(){
        await backgroundService.getBackgroundImage()
    }
}