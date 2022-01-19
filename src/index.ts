import "./style/style.css";
import { createGameOfLife } from "./createGameOfLife";

const el: HTMLElement | null = document.querySelector(".game");

if (el) {
  const gameWrapper: HTMLElement = el;
  createGameOfLife(gameWrapper);
}
