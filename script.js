let input_section = document.querySelector('.search-input');
let search_icon = document.querySelector('.search-icon');
let temp = document.querySelector('.temperature');
let humidity_detail = document.querySelector('.humidity-detail');
let wind_detail = document.querySelector('.wind-detail');
let cityLocation = document.querySelector('.location');
let weather_icon = document.querySelector('.weather-icon');


search_icon.addEventListener('click', () => {
    const cityName = input_section.value.trim();

    if(cityName === ""){
        return;
    }
    input_section.value = "";
    searchDetails(cityName);
});
input_section.addEventListener('keypress', (event) => {
    const cityName = input_section.value.trim();

    if(event.key === "Enter"){
        if(cityName === ""){
            return;
        }
        input_section.value = "";
        searchDetails(cityName);
    }
});

async function searchDetails(cityName) {
    try {
        let apiKey = "14766ea745a54ab2377f38f7f6a2b679";
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    let response = await fetch(api);
    let data = await response.json();

    cityLocation.textContent = `${data.name},${data.sys.country}`;
    temp.textContent = `${Math.round(data.main.temp)} °C`;
    humidity_detail.textContent = `${data.main.humidity} %`;
    wind_detail.textContent = `${data.wind.speed} km/h`;
    // weather_icon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    }    
    catch (error) {
        cityLocation.textContent = 'City not found';
        temp.textContent = '- °C';
        humidity_detail.textContent = '- %';
        wind_detail.textContent = '- km/h';
    }
}
