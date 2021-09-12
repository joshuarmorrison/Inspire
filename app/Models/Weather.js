export class weather{
    constructor(weatherData){
        this.name = weatherData.name 
        this.icon = weatherData.weather.icon 
        this.temp = weatherData.main.temp 
        this.weather = weatherData.weather 
        this.clouds = weatherData.clouds 

        

    }
    get Template() {
        return /*html*/ `
        <h5 class="text-white">
        ${this.temp}
      </h5>
      <h6 class="text-white">${this.name}</h6>`
      }
}