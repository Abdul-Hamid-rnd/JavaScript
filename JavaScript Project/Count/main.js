const Increase = document.getElementById("Increase");
const Reset = document.getElementById("Reset");
const Decrease = document.getElementById("Decrease");
const mainValue = document.getElementById("mainValue");
let countValue = 0;
Increase.addEventListener("click", () => {
  countValue += 2;
  mainValue.textContent = countValue;
  if (countValue > 0) mainValue.style.color = "green";
});

Decrease.addEventListener("click", () => {
  countValue -= 1;
  mainValue.textContent = countValue;
  if (countValue < 0) mainValue.style.color = "red";
});

Reset.addEventListener("click", () => {
  countValue = 0;
  mainValue.textContent = countValue;
  if (countValue == 0) mainValue.style.color = "black";
});
