export class weather{
    constructor(weatherData){
        this.name = weatherData.name 
        this.icon = weatherData.weather.icon 
        this.temp = weatherData.main.temp 
        this.weather = weatherData.weather 
        this.clouds = weatherData.clouds 
        this.type = weatherData.type || false

        

    }
    get Template() {
        return /*html*/ `
        <h5 class="text-white" onclick="app.weatherController.tempConverter()">
        ${this.temp}
      </h5>
      <h6 class="text-white">${this.name}</h6>`
      }
}