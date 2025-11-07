import { Subject } from "../interfaces/Subject";

export type WeatherDataState = {
    temperature: number,
    humidity: number,
    pressure: number,
}

export class WeatherData extends Subject<WeatherDataState> {
}