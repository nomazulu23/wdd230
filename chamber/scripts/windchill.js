/*get the two input values of temperature and wind speed,
check to make sure they meet the specification limits  (<=50°F and >3.0mph) allowed to officially calculate the wind chill, and
either calculate and display the wind chill factor value or display "N/A" (not applicable) if the input values did not meet the requirements.*/
 
//  mph = km/h * 0.621371 

//  °F = (°C * 9/5) + 32

const temperature = 84 //this is the normal temperature (fahranheit) on a normal day in Cuautla, Morelos
const speed = 1.478863 //this is the normal wind speed on mph
// The formula to calculate the wind chill factor is f=35.74+0.6215\:t-35.75\:s^{0.16}+0.4275\:t\:s^{0.16}


if (temperature <= 50 && speed > 3.0 ) {

  document.getElementById("wind-chill").innerHTML = (35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16));
} else {
  document.getElementById("wind-chill").innerHTML = ("N/A");
}

