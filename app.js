const footballCount = document.getElementById("football-count");
const fpsDisplay = document.getElementById("fcps-display");
const footballBtn = document.getElementById("footballBtn");
const amateurBtn = document.getElementById("amateurBtn");
const professionalBtn = document.getElementById("professionalBtn");
const championBtn = document.getElementById("championBtn");

let football = 0;
let fps = 1;

function increaseFootball() {
  football += fps;
  footballCount.textContent = football;
  localStorage.setItem("count", football);
}

setInterval(increaseFootball, 1000);

if (footballBtn) {
  footballBtn.addEventListener("click", increaseFootball);
}

function getCount() {
  const savedCount = localStorage.getItem("count");
  football = parseInt(localStorage.getItem("count"));
  footballCount.textContent = football;
}
getCount();

// alert pop ups and increase fps
function alertUserAmateur() {
  if (football < 100) {
    alert("You do not have enough footballs to buy this yet!");
  } else {
    football -= 100;
    fps += 1;
    footballCount.textContent = football;
    fpsDisplay.textContent = fps;
    localStorage.setItem("count", football);
    alert("Amateur upgrade purchased! FPS increased by 1.");
  }
}

amateurBtn.addEventListener("click", alertUserAmateur);

function alertUserProfessional() {
  console.log("Champion button clicked");
  //unable to get this part to work
  if (football < 1000) {
    alert("You do not have enough footballs to buy this yet!");
  } else {
    football -= 1000;
    fps += 10;
    footballCount.textContent = football;
    fpsDisplay.textContent = fps;
    localStorage.setItem("count", football);
    alert("Professional upgrade purchased! FPS increased by 10.");
  }
}

professionalBtn.addEventListener("click", alertUserProfessional);

function alertUserChampion() {
  //unable to get this part to work
  if (football < 10000) {
    alert("You do not have enough footballs to buy this yet!");
  } else {
    football -= 10000;
    fps += 100;
    footballCount.textContent = football;
    fpsDisplay.textContent = fps;
    localStorage.setItem("count", football);
    alert("Champion upgrade purchased! FPS increased by 100.");
  }
}

championBtn.addEventListener("click", alertUserChampion);
