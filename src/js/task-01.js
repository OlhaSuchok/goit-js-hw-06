"use strict";

const itemEL = document.querySelectorAll("#categories > .item");

const numberOfCategories = itemEL.length;
console.log("Number of categories:", numberOfCategories);

itemEL.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
