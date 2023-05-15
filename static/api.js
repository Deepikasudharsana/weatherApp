const api_Key="&appid={e802098a63ee7e82a745e5b52a63cb2e}";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&d=newyork";
async function checkWeather()
{
    // const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={e802098a63ee7e82a745e5b52a63cb2e}");
 const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"    );

var data = await response.json();
    console.log(data);

    
}