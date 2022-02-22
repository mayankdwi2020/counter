const counter = document.getElementById("count");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
function colorChange(color) {
  counter.style.color = `${color}`;
}
increase.addEventListener("click", (e) => {
  counter.innerText++;
  if (counter.innerText > 0) {
    colorChange("green");
  }
  if (counter.innerText == 0) {
    colorChange("black");
  }
});

decrease.addEventListener("click", (e) => {
  counter.innerText--;
  if (counter.innerText < 0) {
    colorChange("red");
  }
  if (counter.innerText == 0) {
    colorChange("black");
  }
});
reset.addEventListener("click", (e) => {
  counter.innerText = 0;
  colorChange("black");
});
