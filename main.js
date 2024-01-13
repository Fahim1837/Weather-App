const apiKey = "194af8dd7955381eda436c63a769654b"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon");

function isAPIValid(val) {
    if (val == 404){
        document.querySelector(".error").style.display ="block"
        document.querySelector(".weather").style.display ="none"
        return false
    }
    return true

}

function changeWeatherIcon(icon){
    switch (icon){
        case "Clouds":
            weatherIcon.src = "./images/clouds.png"
            break;
        case "Rain":
            weatherIcon.src = "./images/rain.png"
            break;
        case "Clear":
            weatherIcon.src = "./images/clear.png"
            break;
        case "Drizzle":
            weatherIcon.src = "./images/drizzle.png"
            break;
        case "Mist":
            weatherIcon.src = "./images/mist.png"
            break;
    }
}
    
async function checkWeather(cityName){
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`)

    if (!isAPIValid(response.status)) return
    
    let data  = await response.json();
    console.log(data)

    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "&deg;C";
    humidity.innerHTML = data.main.humidity + "%"
    wind.innerHTML = data.wind.speed + "km/h"

    changeWeatherIcon(data.weather[0].main)

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display ="none"
    console.dir(searchBox)

}

const city = document.querySelector(".city")
const temp = document.querySelector(".temp")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")

searchBtn.addEventListener("click", () => checkWeather(searchBox.value))
