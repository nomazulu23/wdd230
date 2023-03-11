// W10 Weather API

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=16f4d171d38bf7f4ff88a2c6f63eb5b3';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();
}

// ____________________________________________________________________

//copyright with date
const date = new Date();
// current year
const year = date.getFullYear();
document.querySelector("#year").innerHTML = year;

let dateModified = ('Last updated: ' + document.lastModified);
document.getElementById("date").innerHTML = dateModified;


//Source: https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/