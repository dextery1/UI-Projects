const decreaseBtn = document.getElementById("decrease-btn");
const increaseBtn = document.getElementById("increase-btn");
const resetBtn = document.getElementById("reset-btn");
const countLabel = document.getElementById("count-label");

let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
