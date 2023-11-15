const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const counterEl = document.querySelector(".counter");
const counterTitleEl = document.querySelector(".counter__title");

function incrementCounter() {
  const currentValue = counterValueEl.textContent;
  const currentValueNumber = Number(currentValue);
  let newValue = currentValueNumber + 1;
  if (newValue > 5) {
    newValue = 5;
    counterEl.classList.add("counter--overfive");
    counterTitleEl.innerHTML = "<b>Max Value</b>";
  } else {
    counterEl.classList.remove("counter--overfive");
  }
  counterValueEl.textContent = newValue;
}

increaseButtonEl.addEventListener("click", incrementCounter);
document.addEventListener("keydown", incrementCounter);

function decrementCounter() {
  const currentValue = counterValueEl.textContent;
  const currentValueNumber = Number(currentValue);
  let newValue = currentValueNumber - 1;
  if (newValue < 0) {
    newValue = 0;
  }
  counterValueEl.textContent = newValue;
}
decreaseButtonEl.addEventListener("click", decrementCounter);
document.addEventListener("keydown", decrementCounter);

function resetCounter() {
  counterValueEl.textContent = 0;
}
resetButtonEl.addEventListener("click", resetCounter);
