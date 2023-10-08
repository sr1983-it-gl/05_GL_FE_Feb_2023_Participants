
import {WeatherAPI} from "./weather-api.js"

function testConstructURL(){

  // object for weather-api
  // invoke the function
  // 

  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.constructURL("Brazil");

}


testConstructURL();