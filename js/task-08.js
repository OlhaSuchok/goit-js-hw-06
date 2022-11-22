"use strict";

const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Увага! Всі поля повинні бути заповнені!");
  }

  console.log(`Ваш email: ${email.value}, Ваш пароль: ${password.value}`);
  event.currentTarget.reset();
}
