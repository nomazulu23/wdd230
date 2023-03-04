const date = new Date();
// current year
const year = date.getFullYear();
document.querySelector("#year").innerHTML = year;

let dateModified = ('Last updated: ' + document.lastModified);
document.getElementById("date").innerHTML = dateModified;
