// HOME PAGE************************************************************************

// hamburger button
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// --------------------------------------

let currentYear = new Date().getFullYear();
let currentYearElement = document.getElementById("currentYear");

currentYearElement.innerHTML = currentYear;

let LastModif = new Date(document.lastModified);
console.log(LastModif)
let lastModificationTime = document.getElementById("lastModified");
 
lastModificationTime.innerHTML = LastModif;

var currentDate = new Date();
var day = currentDate.getDay();
var dayNum = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();

var days = ["Sunday","Monday","Tuesday","🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var dateString = days[day] + ", " + dayNum + " " + months[month] + " " + year;

document.getElementById("get_date").innerHTML = dateString;

// ---------------------------------------------------
/* Weather*/

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Lublin&units=imperial&appid=16f4d171d38bf7f4ff88a2c6f63eb5b3';

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


// DISCOVER PAGE LAZY LOAD *****************************************************************************************

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
// DIRECTORY PAGE (JSON)********************************************************
const new_url = 'scripts/data.json';

// If it checks out, comment out the console line and call a new function that will loop through the prophet records and build an HTML card for each one. If you run this code it will error because we have not built the displayProphets function.
async function getCompanyData(new_url) {
const response = await fetch(new_url);
const data = await response.json();
console.log(data.companies);
displayCompanies(data.companies);
}

getCompanyData(new_url);
// Function to display the prophet cards
const displayCompanies = (companies) => {
    // Create elements to add to the div.cards element
    const cards = document.querySelector('div.cards');

    
    companies.forEach((company) => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let address = document.createElement('p');
    

    h2.textContent = company.name ;
    address.textContent = `📍${company.address}`;
    

    portrait.setAttribute('src', company.imageurl);
    portrait.setAttribute('alt', `Portrait of ${company.name} ${company.address}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
   

    card.appendChild(h2);
    card.appendChild(address);
    cards.appendChild(card);
    card.appendChild(portrait);


    const gridbutton = document.querySelector("#grid");
      
      
    const listbutton = document.querySelector("#list");

    gridbutton.addEventListener("click", () => {
      // example using arrow function
      cards.classList.add("cards");
      cards.classList.remove("list");
  });

  listbutton.addEventListener("click", () => {
      // example using arrow function
      cards.classList.add("list");
      cards.classList.remove("cards");

    });
  });  
}
