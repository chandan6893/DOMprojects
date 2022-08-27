const cityName = document.querySelector(".city");
const clickButton = document.querySelector(".button");

clickButton.addEventListener("click",function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=aea1eac3e9e7e22074274af13ba42646`)
    .then(response => response.json())
    .then(data => {
        let result = `<div><h1>City : ${data.name}</h1>
                           <h1>Temp : ${Math.round(data.main.temp-273)}&deg;C</h1></div>`

        let display = document.querySelector(".display")
        display.innerHTML = result
        // console.log(data)
    }).catch(error => alert("Invalid City Name"))
})