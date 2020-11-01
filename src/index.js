import menuCardsTpl from "./templates/cards.hbs";
import menu from "./js/menu.json";
import "./css/styles.css";

const cardsMarkup = createMenuCardsMarkup(menu);
const container = document.querySelector(".js-menu");

container.insertAdjacentHTML("beforeend", cardsMarkup);

function createMenuCardsMarkup(menu) {
  return menu.map(menuCardsTpl).join("");
}

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const body = document.querySelector("body");
const switchTheme = document.querySelector(".theme-switch__toggle");

switchTheme.addEventListener("change", clickOnSwitch);
document.addEventListener("DOMContentLoaded", themeFromLocalStorage);

function clickOnSwitch() {
  if (switchTheme.checked) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

function setDarkTheme() {
  body.classList.add(Theme.DARK);
  body.classList.remove(Theme.LIGHT);
  if (switchTheme.checked) {
    localStorage.setItem("theme", Theme.DARK);
  }
}

function setLightTheme() {
  body.classList.add(Theme.LIGHT);
  body.classList.remove(Theme.DARK);
  localStorage.setItem("theme", Theme.LIGHT);
}

function themeFromLocalStorage() {
  const themeInLocalStorage = localStorage.getItem("theme");
  if (themeInLocalStorage === Theme.DARK) {
    body.classList.add(Theme.DARK);
    switchTheme.checked = true;
  }
}
