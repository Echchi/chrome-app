const API_KEY = "bfd25a52eccc5da44d53abfbeb61cd8c";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data=> { 
            const city =    document.querySelector('.weather div:first-child');
            const temperature =    document.querySelector('.weather div:nth-child(2)');
            const weather = document.querySelector('.weather div:last-child');
            city.innerText = data.name;
            temperature.innerText = data.main.temp;
            weather.innerText = data.weather[0].main;
        });
}   

function onGeoError(){
    alert("Can't find You! NO weather for you 😕")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);