var timer = 60;
var score = 0;
var hitnum = 0;
let mySound = new Audio("negative_beeps-6008.mp3");
function increaseScore() {
  score += 10;
  document.querySelector("#scoreValue").textContent = score;
}
function getNewNum() {
  hitnum = Math.floor(Math.random() * 10);
  document.querySelector("#newNum").textContent = hitnum;
}
function bubbles() {
  var clutter = "";
  for (var i = 1; i <= 136; i++) {
    var num = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${num}</div>`;
  }
  document.querySelector(".bottom_box").innerHTML = clutter;
}
function endTimer() {
  var timer = 60;
  var startTimer = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
      document.querySelector("#reset").style.display = "none";
    } else {
      clearInterval(startTimer);
      document.querySelector(
        ".bottom_box"
      ).innerHTML = `<h1 style="text-align: center;">Game Over <br/>${score}</h1>`;
      document.querySelector("#reset").style.display = "block";
    }
  }, 1000);
}
function decreaseScore() {
  if (score >= 5) {
    score -= 5;
    document.querySelector("#scoreValue").textContent = score;
  } else {
    score = 0;
  }
}
function click() {
  document.querySelector(".bottom_box").addEventListener("click", function (d) {
    var clickNumber = Number(d.target.textContent);
    if (clickNumber === hitnum) {
      increaseScore();
      bubbles();
      getNewNum();
      document.querySelector("#scoreValue").style.backgroundColor = "#fff";
    } else {
      decreaseScore();
      mySound.play();
      document.querySelector("#scoreValue").style.backgroundColor = "red";
    }
  });
}
function reset() {
  document.querySelector("#reset").addEventListener("click", () => {
    getNewNum();
    endTimer();
    bubbles();
    endTimer();
    document.querySelector("#scoreValue").style.backgroundColor = "#fff";
    document.querySelector("#scoreValue").textContent = 0;
  });
}

reset();
click();
getNewNum();
endTimer();
bubbles();
