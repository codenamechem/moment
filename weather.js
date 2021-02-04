const weather = document.querySelector(".js-weather");

const API_KEY = "d10f817897b90cd80df192e261af2a4d";
const COORDS = "coords";

function getWeather(lat,lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place  = json.name;
        weather.innerText = `${temperature}℃ @ ${place}`;
    });
}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(positon){
    const latitude = positon.coords.latitude;
    const longitude = positon.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const paresedCoords = JSON.parse(loadedCoords);
        getWeather(paresedCoords.latitude, paresedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();