// At the top of prophets.js, begin by declaring a variable named url that contains the URL string of the JSON resource provided.
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// If it checks out, comment out the console line and call a new function that will loop through the prophet records and build an HTML card for each one. If you run this code it will error because we have not built the displayProphets function.
async function getProphetData() {
const response = await fetch(url);
const data = await response.json();
displayProphets(data.prophets);
}

// Function to display the prophet cards
const displayProphets = (prophets) => {
    // Create elements to add to the div.cards element
    const cards = document.querySelector('div.cards');

    
    prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');
    let deathdate = document.createElement('p');
    let presidencylength = document.createElement('p');

    h2.textContent = `${prophet.name} ${prophet.lastname} `;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} ${prophet.order} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    deathdate.textContent = `Date of Death: ${prophet.death}`;
    presidencylength.textContent = `Length of Presidency: ${prophet.length} years`;

    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(deathdate);
    card.appendChild(presidencylength);
    cards.appendChild(card);
    card.appendChild(portrait);
    });
}

// Call the getProphetData function to display the cards
getProphetData();

// ______________________________________________________________

//copyright with date
const date = new Date();
// current year
const year = date.getFullYear();
document.querySelector("#year").innerHTML = year;

let dateModified = ('Last updated: ' + document.lastModified);
document.getElementById("date").innerHTML = dateModified;


//Source: https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/