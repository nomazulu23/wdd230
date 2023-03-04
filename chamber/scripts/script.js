/* 
this search 
for the current 
year id in the html
*/
let currentYear = new Date().getFullYear();
let currentYearElement = document.getElementById("currentYear");
/* 
uses the object Date 
to obtain year 
but we just need the year 
that's why I use getFullYear()
*/

currentYearElement.innerHTML = currentYear;
 

// /* last modified */

let LastModif = new Date(document.lastModified);
console.log(LastModif)
let lastModificationTime = document.getElementById("lastModified");
 
lastModificationTime.innerHTML = LastModif;

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


const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
}



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

// Get the select element
const selectBox = document.getElementById("membership-level");

// Add event listener to the select element to detect changes
selectBox.addEventListener("change", (event) => {
  // Get the selected option
  const selectedOption = event.target.options[event.target.selectedIndex];
  
  //Remove the selected attribute from all options
  for (let i = 0; i < event.target.options.length; i++) {
    event.target.options[i].removeAttribute("selected");
  }
  
  // Set the selected attribute to the newly selected option
  selectedOption.setAttribute("selected", "");
});

// start of the selected style
const selectedStyle = {
  borderRadius: '30%',
  transition: 'border-radius 1s',
  
  
};

// Define the initial style for the unselected elements
const initialStyle = {
  borderRadius: '10px',
  transition: 'border-radius 1s',
  
}

// Set the selected style for the selected element
function setSelectedStyle(element) {
  element.style.borderRadius = selectedStyle.borderRadius;
  element.style.transition = selectedStyle.transition;
  
}

// Reset the unselected styles for the unselected elements
function resetUnselectedStyles(selectedElement, elements) {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] !== selectedElement) {
      elements[i].style.borderRadius = initialStyle.borderRadius;// indicates to reset
      elements[i].style.transition = initialStyle.transition;// indicates to reset
      
    }
  }
}


const npDiv = document.getElementById('np');
const bronzeDiv = document.getElementById('bm');
const silverDiv = document.getElementById('sm');
const goldDiv = document.getElementById('gm');
const membershipDivs = [npDiv, bronzeDiv, silverDiv, goldDiv];

npDiv.addEventListener('click', () => {
  setSelectedStyle(npDiv);
  resetUnselectedStyles(npDiv, membershipDivs);
  const npOption = document.querySelector('#membership-level [value=NP_Membership]');
  npOption.selected = true;
});

bronzeDiv.addEventListener('click', () => {
  setSelectedStyle(bronzeDiv);
  resetUnselectedStyles(bronzeDiv, membershipDivs);
  const bronzeOption = document.querySelector('#membership-level [value=Bronze_Membership]');
  bronzeOption.selected = true;
  
});

silverDiv.addEventListener('click', () => {
  setSelectedStyle(silverDiv);
  resetUnselectedStyles(silverDiv, membershipDivs);
  const silverOption = document.querySelector('#membership-level [value=Silver_Membership]');
  silverOption.selected = true;
});

goldDiv.addEventListener('click', () => {
  setSelectedStyle(goldDiv);
  resetUnselectedStyles(goldDiv, membershipDivs);
  const goldOption = document.querySelector('#membership-level [value=Gold_Membership]');
  goldOption.selected = true;
});

 