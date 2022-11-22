"use strict";

const inputEL = document.querySelector("input#font-size-control");

const spanEl = document.querySelector("span#text");

inputEL.addEventListener("input", changesToFontSize);

function changesToFontSize() {
  spanEl.style.fontSize = inputEL.value + "px";

  console.log(inputEL.value);
  console.log(spanEl.style.fontSize);
}
