
var cityName = document.getElementById("name");
var submit = document.querySelector("#submit");
var city = document.querySelector("#city");
var temp = document.querySelector("#temp");
var description = document.querySelector("#description");
var humidity = document.querySelector("#humidity");
var wind = document.querySelector("#wind");
const APIKEY = "b8da78a7bf2e2b86667d44ade54cbcb1";

function KelvinToCelciusConversion(val){
    return (val - 273).toFixed(2);
};

submit.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid='+APIKEY) 
    .then(res => res.json())
    .then(data => {
        var nameval = data['name']
        var description = data['weather']['0']['description']
        var temperature = KelvinToCelciusConversion(data['main']['temp'])
        var humidityVal = data['main']['humidity'];
        var wndspd = data['wind']['speed']

        city.innerHTML = `Weather in <span>${nameval}<span>`
        temp.innerHTML = `<span>${temperature}<span>`
        description.innerHTML = `<span>${description}<span>`
        wndspd.innerHTML = `Wind Speed: <span>${wndspd}<span>`  
        humidity.innerHTML = `Humidity: <span>${humidityVal}%<span>`
        
    })
    .catch(err => alert('You entered an invalid city name!'))

   
});



