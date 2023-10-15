// 
const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch");

// check if the mode is already set to "Dark Mode" in localStorage
if (localStorage.getItem("mode") === "Dark Mode") {
  // add "dark" class to body and set modeSwitch text to "Light Mode"
  body.classList.add("dark");
  modeSwitch.textContent = "Light Mode";
}

// add a click event listener to modeSwitch
modeSwitch.addEventListener("click", () => {
  // toggle the "dark" class on the body element
  body.classList.toggle("dark");
  // check if the "dark" class is currently present on the body element
  const isDarkMode = body.classList.contains("dark");
  // set modeSwitch text based on "dark" class presence
  modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  // set localStorage "mode" item based on "dark" class presence
  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

const updateTime = () => {
  // Obtenir l'heure actuelle et calculer les degrés des aiguilles de l'horloge

  // Obtient la date et l'heure actuelle
  let date = new Date();


  // Obtenez les heures, minutes et secondes de la date actuelle
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  // Calculez les degrés pour les aiguilles de l'horloge
  let secToDeg = (seconds / 60) * 360;
  let minToDeg = (minutes / 60) * 360;
  let hrToDeg = ((hours % 12) / 12) * 360;

  // Fait tourner les aiguilles de l'horloge aux degrés appropriés en fonction de l'heure actuelle

  // Fait tourner l'aiguille des secondes
  secondHand.style.transform = `rotate(${secToDeg}deg)`;

  // Fait tourner l'aiguille des minutes
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;

  // Fait tourner l'aiguille des heures
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

// Appelle updateTime pour positionner les aiguilles de l'horloge chaque seconde
setInterval(updateTime, 1000);

// Appelle la fonction updateTime lors du chargement de la page pour initialiser l'horloge
updateTime();
