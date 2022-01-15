import { drawField } from "./drawField";
import { startLife } from "./startLife";
export function createGameOfLife(el: HTMLElement) {
  const field = el.querySelector(".game__wrapper") as HTMLElement;
  const inputRange = el.querySelector(".game__input-range") as HTMLInputElement;
  const inputWidth = el.querySelector(".game__input-width") as HTMLInputElement;
  let objActivCell:{ arrActiv: string[]; arrUNactiv: string[]; };
  const inputHaight = el.querySelector(".game__input-height") as HTMLInputElement;
  const btn = el.querySelector(".game__btn") as HTMLElement;
  let gameIsRunning = false;
  let timer: ReturnType<typeof setTimeout>;
  let width = inputWidth.valueAsNumber;
  let haight = inputHaight.valueAsNumber;
  inputWidth.addEventListener("input", () => {
    width = inputWidth.valueAsNumber
    drawField(field,haight,width,objActivCell);

  });
  inputHaight.addEventListener("input", () => {
    haight = inputHaight.valueAsNumber
    drawField(field,haight,width,objActivCell);

  });

  drawField(field,haight,width);
  btn.addEventListener("click", () => {
    if (gameIsRunning == false) {
      startGame();
    } else {
      stopGame();
    }
  });

  inputRange.addEventListener("input", () => {
    clearInterval(timer);
    startGame();
  });

  function stopGame() {
    gameIsRunning = false;
    clearInterval(timer);
    btn.innerHTML = "Start";
  }
  function startGame() {
    gameIsRunning = true;
    btn.innerHTML = "Stop";
    timer = setInterval(() => {
      let activeСell = document.querySelector(".activ");
      if (activeСell === null) {
        stopGame();
      } else { 
        objActivCell = startLife();
      }
    }, (20 - inputRange.valueAsNumber) * 100);
  }
}
