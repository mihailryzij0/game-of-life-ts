import "./style/style.css";
import { createGameOfLife } from "./createGameOfLife";
// - для проверки своего кода можно создать еще один элемент и создать вторую игру на этой же странице
// const gameWrapper1 = document.createElement("div");
// document.body.appendChild(gameWrapper1);
const el: HTMLElement | null = document.querySelector(".game");

if (el) {
  const gameWrapper: HTMLElement = el;
  createGameOfLife(gameWrapper);
}
