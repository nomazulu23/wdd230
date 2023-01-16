const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyright');

h1.textContent = `Heather Jasi`;
copyright.textContent = `${new Date().getFullYear()}`;
let quantity = document.querySelector('#q').value;
document.querySelector('p').innerHTML = 'Welcome to <em>our</em> neighborhood!';
document.querySelector('#temp').value = getTemperature();
const divs = document.querySelectorAll('div');
let citynames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];
let filterC = citynames.filter(city => city.charAt(0) === 'C');