
import {WeatherAPI} from "./weather-api.js"

function testConstructURL(){

  // object for weather-api
  // invoke the function
  // 

  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.constructURL("Brazil");

}

async function testInvokeURL() {

  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.constructURL("France");
  const responseJSON  = await weatherAPIObj.invokeURL();
  console.log(responseJSON);

}

// testConstructURL();

testInvokeURL();
