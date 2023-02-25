//  Hamburger Navigation
function toggleMenu() {
  document.getElementById("main_nav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;


/* 
this search 
for the current 
year id in the html
*/
// let currentYear = new Date().getFullYear();
// let currentYearElement = document.getElementById("currentYear");
/* 
uses the object Date 
to obtain year 
but we just need the year 
that's why I use getFullYear()
*/

currentYearElement.innerHTML = currentYear;
 



/* date header */

var currentDate = new Date();
var day = currentDate.getDay();
var dayNum = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();

var days = ["Sunday","Monday","Tuesday","🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var dateString = days[day] + ", " + dayNum + " " + months[month] + " " + year;

document.getElementById("get_date").innerHTML = dateString;


/* temperature script */

async function getWeather() {
  const response = await fetch("https://api.openweathermap.org/data/2.5/weather?appid=d1bf7498feb4f8b222047310ce70549e&units=metric&id=3529982");
  const data = await response.json();
  return data;
}


async function displayWeather() {
  const weatherData = await getWeather();


  document.getElementById("weather-temp").innerHTML = weatherData.main.temp;
  // document.getElementById("wind-chill").innerHTML = weatherData.main.humidity;
  document.getElementById("wind-speed").innerHTML = weatherData.wind.speed;
  document.getElementById("weather-desc").innerHTML = weatherData.weather[0].description;


}

displayWeather()

// date for the footer
const date = new Date();

// current year
const year = date.getFullYear();
document.querySelector("#year").innerHTML = year;
// Modified date
let dateModified = ('Last updated: ' + document.lastModified);
document.getElementById("date").innerHTML = dateModified;