"use strict";

const inputEl = document.querySelector("input#validation-input");

inputEl.addEventListener("blur", changesToBorderColor);

function changesToBorderColor() {
  if (inputEl.value.length == inputEl.dataset.length) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }

  console.log(inputEl.value.length);
}
