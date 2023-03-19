const windSpeed = document.querySelector('.wind-speed');
const currentTemp = document.querySelector('#current-temp');
const img = document.createElement('img');
img.setAttribute('id', 'weather-icon');
const weather = document.querySelector('#weather');
weather.append(img);
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#status');
const windChill = document.querySelector('.wind-chill');
const cityName = "Salvador,br";
const apiID = "a321a24880d341ec1049227f82a34540";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiID}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch(); //Call apiFetch function for the first time.

//Call apiFetch function each 8 seconds.
const callFuncEachMin = setInterval(apiFetch, 8000);

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const temp = weatherData.main.temp.toFixed(0)
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const speed = weatherData.wind.speed.toFixed(0);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();

    if (temp <= 50 && speed > 3) {
        const windChillFahrenheit = 35.74 + (0.6215 * temp) + (0.4275 * temp - 35.75)  *  speed ^ 0.16;

        console.log(windChillFahrenheit)
        windChill.innerHTML = windChillFahrenheit;

    } else {
        na = "N/A";
        windChill.innerHTML = na;
    }
    windSpeed.innerHTML = speed;
}