import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuotesController.js";
import {WeatherController} from "./Controllers/WeatherController.js";

class App {
 
  imageController = new ImageController()
 weatherController = new WeatherController()
 quotesController = new QuoteController()
}

window["app"] = new App();
