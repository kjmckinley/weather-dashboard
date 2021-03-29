// WEATHER-DASHBOARD

// API Key: 62945687d697ead5f1333d2a6ea75d0a

// One large function to house the others. This main function executes the rest of the code.
function main() {

    // List of constant variables that will have their value equal to certain ids through the DOM
    //API key
    const APIkey = "62945687d697ead5f1333d2a6ea75d0a";
    
    const historyEl = document.getElementById("user-search-history");
    // Lets local storage save city on it's own or to be added to an array if there is more than one
    let userHistoryEl  = JSON.parse(localStorage.getItem("search")) || [];
    console.log(userHistoryEl);

    const userInputEl = document.getElementById("user-city");
    const searchBtnEl = document.getElementById("search-btn");
    const cityNameEl = document.getElementById("city");
    const weatherImgEl = document.getElementById("weather-conditon-pic");
    const localTempEl = document.getElementById("temperature");
    const localHumidity = document.getElementById("humidity");
    const localWindSpdEl = document.getElementById("windspeed");
    const localUVIndexEl = document.getElementById("uv-index");

    
    
    

}
main();