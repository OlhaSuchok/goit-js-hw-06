"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const inputEl = document.querySelector('input[type="number"]');
const boxes = document.querySelector("div#boxes");
const amount = inputEl.value;

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = inputEl.value;
  const boxSizes = 30;

  for (let i = 0; i < amount; i++) {
    const newBoxes = document.createElement("div");
    const newSize = boxSizes + i * 10;

    newBoxes.style.width = `${newSize}px`;
    newBoxes.style.height = `${newSize}px`;
    newBoxes.style.backgroundColor = getRandomHexColor();

    boxes.append(newBoxes);
    console.log(newBoxes);
  }
}

function destroyBoxes() {
  boxes.textContent = "";
  console.log("Коробка очищена!");
}
