import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuotesController.js";
import {WeatherController} from "./Controllers/WeatherController.js";
import {ClockController} from "./Controllers/ClockController.js";
import { TaskController } from "./Controllers/TaskController.js";

class App {
 
  imageController = new ImageController()
 weatherController = new WeatherController()
 quotesController = new QuoteController()
 clockController = new ClockController()

taskController = new TaskController()
}

window["app"] = new App();
