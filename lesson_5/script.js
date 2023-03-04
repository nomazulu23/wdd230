// Selecting Ids from the HTML
const input = document.querySelector("#favchap");
const list = document.querySelector("#list");
const button = document.querySelector("#button");

button.addEventListener("click", function() {

    const li = document.createElement("li");
    const delete_button = document.createElement("button");
    const text = input.value; 

    li.innerHTML = text;
    delete_button.textContent = "X" 
    
    
    li.appendChild(delete_button); 
    list.appendChild(li); 

    delete_button.addEventListener("click", function() {

        list.removeChild(li);  

    });
  });
// ___________________________________________________________________________________________________________________________________________

//copyright with date
const date = new Date();
// current year
const year = date.getFullYear();
document.querySelector("#year").innerHTML = year;

let dateModified = ('Last updated: ' + document.lastModified);
document.getElementById("date").innerHTML = dateModified;


//Source: https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/