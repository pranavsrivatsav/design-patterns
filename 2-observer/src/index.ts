import { WeatherData } from "./implementations/WeatherData";
import { CurrentConditionsDisplay } from "./implementations/weatherViews/CurrentConditionsDisplay";
import { TemperatureDisplay } from "./implementations/weatherViews/TemperatureDisplay";

/*********************************
 * Context: Code example of observer design pattern
 * 
 * Here we have a WeatherData class that gets up to date weather from weather forecase instruments
 * which gets stored in its state
 * 
 * And we have a bunch of views that are subscribed to an instance of this WeatherData class - and their 
 * function is to use the state data of weatherData and to display relevant weather information - and 
 * they must be in sync with the state data of weather - i.e the display should update itself when 
 * the state of the subscribed WeatherData instance changes
 * 
 * So here we use an observer design pattern, where WeatherData is the Subject and the various views are the Observers.
 * These observers need to be registered with the subject to listen to the state changes of WeatherData
 ********************************/


// weatherData is the subject
const weatherData: WeatherData = new WeatherData({
    humidity: 70,
    temperature: 98,
    pressure: 19
})

// The below displays are the observers
const currCondDisplay = new CurrentConditionsDisplay();
const tempDisplay = new TemperatureDisplay();

// register observers - will trigger an initial update in observers
weatherData.registerObserver(currCondDisplay);
weatherData.registerObserver(tempDisplay);

// update state of the subject - which triggers update in observers
weatherData.setState({
    humidity: 40,
    temperature: 104,
    pressure: 8
})

// remove an observer
weatherData.removeObserver(tempDisplay);

// update state again - which will not trigger update of the removed observer
weatherData.setState({
    humidity: 50,
    temperature: 94,
    pressure: 20
})