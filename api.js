async function checkWeather(city)
{
const api_Key="&appid=e802098a63ee7e82a745e5b52a63cb2e";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const response = await fetch(apiUrl +city+ api_Key);
let data = await response.json();
if(data.message==="city not found")
{document.getElementById("result").textContent=`PLEASE ENTER A VALID CITY`}
else{
document.getElementById("result").textContent=`Temperature is ${data.main.temp}C`;
}
}
let buttonA = document.querySelector(".img_size");
buttonA.onclick = () => {

    let cityName = document.getElementById("cityid").value;
    checkWeather(cityName);
    
    };
    var input = document.getElementById("cityid");
    input.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        let cityName = document.getElementById("cityid").value;
    checkWeather(cityName);
    
      }
    });

   // https://api.openweathermap.org/data/2.5/weather?units=metric&q=gfhgfjhj&appid=e802098a63ee7e82a745e5b52a63cb2e