"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredient = ingredients.map((ingredient) => {
  const listEl = document.querySelector("ul#ingredients");
  const listLi = document.createElement("li");

  listLi.classList.add("item");
  listLi.textContent = ingredient;

  listEl.appendChild(listLi);
});
