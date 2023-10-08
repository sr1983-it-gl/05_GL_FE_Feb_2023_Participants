
import {WeatherAPI} from "./weather-api.js"
import { WeatherUtils } from "./weather-utils.js";

class WeatherApp {

  init(){

    this.addListeners();
  }

  addListeners(){

    const searchTextFieldElement = document.querySelector(".search-box")

    searchTextFieldElement.addEventListener("keypress", (event) => {

      const keyCode = event.keyCode;
      
      console.log(`Key Code ${keyCode}`);

      if (keyCode === 13){
        // Enter Key

        const userInput = event.target.value

        const weatherAPIObj = new WeatherAPI();
        weatherAPIObj.constructURL(userInput);
        
        weatherAPIObj.invokeURL2()
          .then( (responseJSON) => {

            const convertedResponse 
              = WeatherUtils.convertResponse(responseJSON);
            
            // Location
            const locationElement = document.querySelector(".location .city")
            locationElement.innerText = convertedResponse.LOCATION;

            // Date
            const dateElement = document.querySelector(".location .date")
            dateElement.innerText = convertedResponse.DATE;

            // Temperature
            const temperatureElement = document.querySelector(".current .temp")
            temperatureElement.innerText = convertedResponse.TEMPERATURE;

            // Temperature Type
            const temperatureTypeElement = document.querySelector(".current .weather")
            temperatureTypeElement.innerText = convertedResponse.TEMPERATURE_TYPE;

            // Low-High Element
            const lowHighElement = document.querySelector(".current .hi-low")
            lowHighElement.innerText 
              = `${convertedResponse.MIN_TEMPERATURE} / ${convertedResponse.MAX_TEMPERATURE}`;

          });
      }
    })

    // key-press
    // keypress
      // Check for Enter Key []
        // event.keyCode == 13

        // object for weather-api
        // construct-url(user-input)
        // invoke-url
        // response-mapper

      // update the HTML elements
  }
}

export {WeatherApp}