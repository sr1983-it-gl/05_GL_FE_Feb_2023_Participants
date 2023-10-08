

import {WeatherUtils} from "./weather-utils.js"
import { WeatherAPI } from "./weather-api.js";

async function testConvertResponse() {

  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.constructURL("Germany");
  const responseJSON  = await weatherAPIObj.invokeURL();
  console.log(responseJSON);

  const outcome = WeatherUtils.convertResponse(responseJSON);

  console.log("Converted Response");
  console.log(outcome);
}

testConvertResponse();