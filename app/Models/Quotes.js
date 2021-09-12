export class quotes {
    constructor(quoteData){
        this.content = quoteData.content
        this.author = quoteData.author
    }
    get Template(){
        return /*html*/ `
        <p>
       ${this.content}
      </p>
      <h6>${this.author}</h6>`
    }
}