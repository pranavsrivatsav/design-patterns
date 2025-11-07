import { Observer } from "../../interfaces/Observer";
import { WeatherData, WeatherDataState } from "../WeatherData";

// Display all the current measurements of weatherData
export class CurrentConditionsDisplay extends Observer<WeatherDataState> {
    update() {
        const {humidity, pressure, temperature} = this.registeredSubject!.getState();
        console.log(`Current Conditions: Humidity - ${humidity} | Pressure - ${pressure} | Temperature - ${temperature}`)
    }
}