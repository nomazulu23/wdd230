// HOME PAGE************************************************************************

// hamburger button
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// --------------------------------------
// Header date

//Select the HTML element to manipulate
// const date1 = document.querySelector("#date1");
// const message = document.querySelector("#emessage");

// // Try to complete the method with options
// try {
// 	const options = {
// 		month: "short",
// 		day: "numeric",
// 		year: "numeric"
// 	};
// 	date1.innerHTML = `Today is <span class="highlight">${new Date().toLocaleDateString("en-US", options)}</span>!`;
// } catch (e) {
// 	console.log("Error with code or your browser does not support Locale");
// }


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

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const speed = weatherData.wind.speed.toFixed(0);

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();
}

// async function getWeather() {
//   const response = await fetch("https://api.openweathermap.org/data/2.5/weather?appid=d1bf7498feb4f8b222047310ce70549e&units=metric&id=3529982");
//   const data = await response.json();
//   return data;
// }

// async function displayWeather() {
//   const weatherData = await getWeather();

//   document.getElementById("weather-temp").innerHTML = weatherData.main.temp;
//   // document.getElementById("wind-chill").innerHTML = weatherData.main.humidity;
//   document.getElementById("wind-speed").innerHTML = weatherData.wind.speed;
//   document.getElementById("weather-desc").innerHTML = weatherData.weather[0].description;

// }
// displayWeather()

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

// JOIN PAGE**********************************************************************

// // Get the select element
// const selectBox = document.getElementById("membership-level");

// // Add event listener to the select element to detect changes
// selectBox.addEventListener("change", (event) => {
//   // Get the selected option
//   const selectedOption = event.target.options[event.target.selectedIndex];
  
//   //Remove the selected attribute from all options
//   for (let i = 0; i < event.target.options.length; i++) {
//     event.target.options[i].removeAttribute("selected");
//   }
  
//   // Set the selected attribute to the newly selected option
//   selectedOption.setAttribute("selected", "");
// });

// // start of the selected style
// const selectedStyle = {
//   borderRadius: '30%',
//   transition: 'border-radius 1s',
  
// };

// // Define the initial style for the unselected elements
// const initialStyle = {
//   borderRadius: '10px',
//   transition: 'border-radius 1s',
// }

// // Set the selected style for the selected element
// function setSelectedStyle(element) {
//   element.style.borderRadius = selectedStyle.borderRadius;
//   element.style.transition = selectedStyle.transition;
// }

// // Reset the unselected styles for the unselected elements
// function resetUnselectedStyles(selectedElement, elements) {
//   for (let i = 0; i < elements.length; i++) {
//     if (elements[i] !== selectedElement) {
//       elements[i].style.borderRadius = initialStyle.borderRadius;// indicates to reset
//       elements[i].style.transition = initialStyle.transition;// indicates to reset
      
//     }
//   }
// }


// const npDiv = document.getElementById('np');
// const bronzeDiv = document.getElementById('bm');
// const silverDiv = document.getElementById('sm');
// const goldDiv = document.getElementById('gm');
// const membershipDivs = [npDiv, bronzeDiv, silverDiv, goldDiv];

// npDiv.addEventListener('click', () => {
//   setSelectedStyle(npDiv);
//   resetUnselectedStyles(npDiv, membershipDivs);
//   const npOption = document.querySelector('#membership-level [value=NP_Membership]');
//   npOption.selected = true;
// });

// bronzeDiv.addEventListener('click', () => {
//   setSelectedStyle(bronzeDiv);
//   resetUnselectedStyles(bronzeDiv, membershipDivs);
//   const bronzeOption = document.querySelector('#membership-level [value=Bronze_Membership]');
//   bronzeOption.selected = true;
  
// });

// silverDiv.addEventListener('click', () => {
//   setSelectedStyle(silverDiv);
//   resetUnselectedStyles(silverDiv, membershipDivs);
//   const silverOption = document.querySelector('#membership-level [value=Silver_Membership]');
//   silverOption.selected = true;
// });

// goldDiv.addEventListener('click', () => {
//   setSelectedStyle(goldDiv);
//   resetUnselectedStyles(goldDiv, membershipDivs);
//   const goldOption = document.querySelector('#membership-level [value=Gold_Membership]');
//   goldOption.selected = true;
// });