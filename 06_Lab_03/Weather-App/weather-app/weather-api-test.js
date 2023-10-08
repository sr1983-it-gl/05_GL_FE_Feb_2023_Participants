
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
  weatherAPIObj.constructURL("Mumbai");
  const responseJSON  = await weatherAPIObj.invokeURL();
  console.log(responseJSON);

}

async function testInvokeURL2() {

  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.constructURL("France");
  const responseJSON  = await weatherAPIObj.invokeURL2();
  console.log(responseJSON);

}

// testConstructURL();

testInvokeURL();

// testInvokeURL2();
