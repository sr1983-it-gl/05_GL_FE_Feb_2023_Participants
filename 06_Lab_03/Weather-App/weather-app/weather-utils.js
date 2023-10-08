

class WeatherUtils {

  static convertResponse(responseJSON){

    const weatherResponse = {
      LOCATION : `${responseJSON.name}, ${responseJSON.sys.country}`,
      DATE: WeatherUtils.getTodayDate(),
      TEMPERATURE : responseJSON.main.temp,
      TEMPERATURE_TYPE : responseJSON.weather[0].main,
      MIN_TEMPERATURE : responseJSON.main.temp_min,
      MAX_TEMPERATURE : responseJSON.main.temp_max
    }

    return weatherResponse;
  }

  static getTodayDate(){

    const today = new Date();

    const dateAsString = today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    })

    return dateAsString;
  }

}

export {WeatherUtils}