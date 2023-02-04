const API_Key = "be1d28a0e06a3577c1afe27bb0efb961";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`;
    fetch(url)
    .then((respose) => respose.json())
    .then((data) => {
        const Text_CityWeather = document.getElementById("City_Weather");
        const Text_CurrentTemp = document.getElementById("Temp");
        const Text_TempMinMax = document.getElementById("TmepMinMax");
        const Text_Humdity = document.getElementById("Humidity");

        Text_CityWeather.innerText = `${data.name} / ${data.weather[0].main}`;
        Text_CurrentTemp.innerText = `\n현재온도 ${data.main.temp}`;
        Text_TempMinMax.innerText = `\n최저 ${data.main.temp_min}℃ / 최고 ${data.main.temp_max}℃`;
        Text_Humdity.innerText = `\n습도 ${data.main.humidity}%`;
        });
}

function onGeoError(){
    alert("위치를 찾을 수 없습니다");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);