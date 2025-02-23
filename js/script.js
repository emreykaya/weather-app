// API Key and URL for Fetch Request
const apiKey = "6efb0a5962b1cf12057b0bd9d1006979";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

// DOM Elements
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

// Function to Check Weather of the City
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        // If City Not Found, Show Error
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        // If City is Found, Show Weather Information
        var data = await response.json();

        // Update City Name and Temperature
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

        // Update Humidity and Wind Speed
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // Weather Icon Change Based on Conditions
        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "./assets/images/clouds.png";
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "./assets/images/clear.png";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "./assets/images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./assets/images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "./assets/images/mist.png";
        }
        else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "./assets/images/snow.png";
        }

        // Display Weather Info and Hide Error Message
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

// Event Listener for Search Button
searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
});
