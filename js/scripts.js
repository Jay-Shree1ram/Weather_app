require('dotenv').config();
const apikey = process.env.API_KEY; ;
const apiUrl = process.env.API_URL;
const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apikey}`);
    var data = await response.json();
    if (data.cod == "404") {    
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "/images/clouds.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "/images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "/images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "/images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
