import { ProxyState } from "../AppState.js";
import { backgroundService } from "../Services/BackgroundService.js";

function _draw(){
    // @ts-ignore
    document.getElementById('bgImage').style.backgroundImage = `url(${ProxyState.bgimage.largeImgUrl})`
    console.log(ProxyState.bgimage);
    // @ts-ignore
    document.getElementById("img").innerHTML = ProxyState.bgimage.Template
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