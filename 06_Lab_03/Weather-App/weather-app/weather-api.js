
// Define a constant for APP_ID
const APP_ID = "fbc0ee13d4cd0ca7ed7b116299399f34";

// Define a constant for Units
const UNITS = "metric"

// Define the baseURL as a constant
const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

class WeatherAPI {

  constructor(){

    this.apiURL = new URL(WEATHER_API_BASE_URL)
  }
  
  constructURL(locationName){

    this.apiURL.searchParams.append("q", locationName);
    this.apiURL.searchParams.append("appid", APP_ID);
    this.apiURL.searchParams.append("units", UNITS);

    console.log(this.apiURL.toString());
  }

  async invokeURL(){

    // response = await fetch()
    //  response.json()
    // return json

  }
}

export {WeatherAPI}