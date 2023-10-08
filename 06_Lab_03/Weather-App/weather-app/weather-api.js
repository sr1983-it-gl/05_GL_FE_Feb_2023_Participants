

// Define a constant for APP_ID

// Define a constant for Units

// Define the baseURL as a constant

class WeatherAPI {

  constructor(){

    this.apiURL = new URL(/*baseURL*/)
  }
  
  constructURL(locationName){

    this.apiURL.searchParams.append("q", "");
    // this.apiURL.searchParams.append("q", "");
    
  }

  invokeURL(){

  }
}