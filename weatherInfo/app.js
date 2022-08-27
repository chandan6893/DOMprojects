// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const weatherApi ={
    key: "79330c2ed70086cc49420a6d8d9eb0f1",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?"
}
const inputBox = document.querySelector("#input-box");
inputBox.addEventListener("click",function(){
    console.log(inputBox.value);
    getWetherReport(inputBox.value);
});

// get wethorReport
function getWetherReport(city){
    fetch(`${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather=>{
          return weather.json();
    }).then(showWeatherReport);
}
function showWeatherReport(weather){
    console.log(weather);
    let city = document.getElementById('city');
    city.innerText = `${weather.name} , ${weather.sys.country}`;
    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C(min)/${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;


    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
}

// dateManage

function dateManage(dateArg){
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let months = ["January","February","March","April","May","june","July","August","September","October","November","December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return`${date} ${month} (${day}), ${year}`;
}
