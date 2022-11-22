"use strict";

const counter = {
  counterValue: 0,

  decrement(counterValue) {
    this.counterValue -= 1;
  },

  increment(counterValue) {
    this.counterValue += 1;
  },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

const valueEL = document.querySelector("#value");

decrementBtn.addEventListener("click", function () {
  counter.decrement();
  valueEL.textContent = counter.counterValue;
});

incrementBtn.addEventListener("click", function () {
  counter.increment();
  valueEL.textContent = counter.counterValue;
});
