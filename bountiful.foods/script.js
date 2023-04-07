var currentDate = new Date();
var day = currentDate.getDay();
var dayNum = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();

var days = ["Sunday","Monday","Tuesday"," Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var dateString = days[day] + ", " + dayNum + " " + months[month] + " " + year;

document.getElementById("get_date").innerHTML = dateString;

// ___________________________________________________

const windSpeed = document.querySelector('.wind-speed');
const currentTemp = document.querySelector('#current-temp');
const img = document.createElement('img');
img.setAttribute('id', 'weather-icon');
const weather = document.querySelector('#weather');
weather.append(img);
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption');
const windChill = document.querySelector('.wind-chill');
const cityName = "Carlsbad";
const apiID = "16f4d171d38bf7f4ff88a2c6f63eb5b3";
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
// __________________________________________________________________
// Images lazy load
//Get all imgs with data-src attribute
let imagesToLoad = document.querySelectorAll("img[data-src]");
//optional parameters being set for the intersectionalObserver
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

// first check to see if Intersection Observer is supported
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);


//loop through each img on check statu    
imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} 
 
else { //just load all images if not supported
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
// ________________________________________________________________________________________
// Menu
function toggleMenu() {
    document.getElementById("#main_nav").classList.toggle("open");
    document.getElementById("#menuButton").classList.toggle("open");
  }
  
  const x = document.getElementById('menuButton');
  x.onclick = toggleMenu;
  

// ______________________________________________________________________________________

const new_url = 'fresh.json';

// If it checks out, comment out the console line and call a new function that will loop through the prophet records and build an HTML card for each one. If you run this code it will error because we have not built the displayProphets function.
async function getCompanyData(new_url) {
const response = await fetch(new_url);
const fresh = await response.json();
console.log(fresh.fruits);
displayCompanies(fresh.fruits);
}

getCompanyData(new_url);
// Function to display the prophet cards
const displayCompanies = (fruits) => {
    // Create elements to add to the div.cards element
    const cards = document.querySelector('div.cards');

    
    fruits.forEach((fruit) => {
    let card = document.createElement('select');
    let family= document.createElement('h2');
    let name= document.createElement('h3')
    let genus= document.createElement('h4')
    let order= document.createEment('p')
    let nutrition = document.createElement('p');
    
    family.textContent = `${fruit.family}`;
    name.textContent = fruit.name ;
    genus.textContent = `${fruit.genus}`;
    order.textContent= `${fruit.order}`
    nutrition.textContent= `${fruit.nutrition}`
    id.textContent = `${fruit.id}`
    

    // portrait.setAttribute('src', fruit.imageurl);
    portrait.setAttribute('alt', `Portrait of ${fruit.name} ${fruit.genus}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
   

    card.appendChild(family);
    card.appendChild(genus);
    card.appendChild(order);
    card.appendChild(nutrition);
    card.appendChild(id);
    cards.appendChild(card);
    card.appendChild(portrait);

  });  
}
// _________________________________________________


