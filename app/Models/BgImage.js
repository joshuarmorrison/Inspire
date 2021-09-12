export class Bgimage {
    constructor(imageData) {
        this.largeImgUrl = imageData.largeImgUrl
        this.tags = imageData.tags
    }
    get Template(){
        return /*html*/ `
        <p>${this.tags}</p>
        `
    }
}