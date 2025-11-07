// Displays only the current temperature in WeatherData
import { Observer } from "../../interfaces/Observer";
import { WeatherData, WeatherDataState } from "../WeatherData";

// Display all the current measurements of weatherData
export class TemperatureDisplay extends Observer<WeatherDataState> {
    update() {
        const {temperature} = this.registeredSubject!.getState();
        console.log(`Temperature Display : ${temperature}`)
    }
}