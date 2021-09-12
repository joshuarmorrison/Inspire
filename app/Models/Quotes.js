export class quotes {
    constructor(quoteData){
        this.content = quoteData.content
        this.author = quoteData.author
    }
    get Template(){
        return /*html*/ `
        <p class="author">
       ${this.content}
      </p>
      <h6 class="hide">${this.author}</h6>`
    }
}