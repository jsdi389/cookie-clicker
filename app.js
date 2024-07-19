const footballCount = document.getElementById("football-count");
const fpsDisplay = document.getElementById("fcps-display");
const footballBtn = document.getElementById("footballBtn");
const upgradeBtn = document.getElementById("upgradeBtn");

let football = parseInt(localStorage.getItem("count"));
let fps = 1;

function increaseFootball() {
  football += fps;
  footballCount.textContent = football;
  localStorage.setItem("count", football);
}
setInterval(increaseFootball, 1000);

function getCount() {
  if (localStorage.getItem("count")) {
    football = parseInt(localStorage.getItem("count"));
  }
  footballCount.textContent = football;
}

// alert pop ups and increase fps
function alertUserUpgrade() {
  if (football < 100) {
    alert("You do not have enough footballs to buy this yet!");
  } else {
    football -= 100;
    fps += 1;
    footballCount.textContent = football;
    fpsDisplay.textContent = fps;
    localStorage.setItem("count", football);
    alert("Upgrade purchased! FPS increased by 1.");
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
