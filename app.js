const footballCount = document.getElementById("football-count");
const fpsDisplay = document.getElementById("fcps-display");
const footballBtn = document.getElementById("footballBtn");
const upgradeBtn = document.getElementById("upgradeBtn");

let football = 0;
let fps = 1;

function increaseFootball() {
  football += fps;
  footballCount.textContent = football;
  localStorage.setItem("count", football);
}
setInterval(increaseFootball, 1000);

(footballBtn) {
  footballBtn.addEventListener("click", increaseFootball);
}

function getCount() {
  if (localStorage.getItem("count")) {
    football = parseInt(localStorage.getItem("count"));
  }
  footballCount.textContent = football;
}
getCount();

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

upgradeBtn.addEventListener("click", alertUserUpgrade);
