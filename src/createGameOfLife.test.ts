import { createGameOfLife } from "./createGameOfLife";
let inputWidth: HTMLInputElement;
let inputHight: HTMLInputElement;
let btn: HTMLElement;
describe("", () => {
  let el: HTMLElement;
  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
    el.innerHTML = `
    <div class="game">
      <h1 class="game__title">Игра жизнь</h1>
      <div class="game__wrapper"></div>
      <div class="game__control">
        <button class="game__btn">Start</button>
        <label for="">Скорость</label>
        <input class="game__input-range" min="1" max="15" type="range" />
        <div class="game__size">
          <label for="">Высота</label>
          <input
            type="number"
            max="31"
            placeholder="max = 30"
            class="game__input-width"
          />
          <label for="">Ширина</label>
          <input
            type="number"
            max="31"
            placeholder="max = 30"
            class="game__input-height"
          />
          <button class="form-btn">установить</button>
        </div>
      </div>
    </div>
    `;
    btn = document.querySelector(".game__btn") as HTMLElement;
    inputWidth = document.querySelector(
      ".game__input-width"
    ) as HTMLInputElement;
    inputHight = document.querySelector(
      ".game__input-height"
    ) as HTMLInputElement;
  });

  jest.useFakeTimers();
  jest.spyOn(global, "setInterval");
  afterEach(() => {
    // @ts-ignore
    document.querySelector("div").innerHTML = null;
  });
  it("changing the speed of work", () => {
    createGameOfLife(el);
    expect(document.querySelector(".game")).toBeTruthy();
    expect(document.querySelector("table")).toBeTruthy();
    btn.dispatchEvent(new Event("click"));
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1200);
  });
  it("changing the field size", () => {
    createGameOfLife(el);
    expect(document.querySelector(".game")).toBeTruthy();
    inputWidth.value = "25";
    inputHight.value = "30";
    inputWidth.dispatchEvent(new Event("input"));
    inputHight.dispatchEvent(new Event("input"));

    let arrField = Array.from(
      // @ts-ignore
      document.querySelector("table").rows,
      (row) => Array.from(row.cells)
    );
    expect(arrField.length).toBe(30);
    expect(arrField[1].length).toBe(25);

  });
  it("changing the speed of work", () => {
    // const element= el.querySelector(".game");
    createGameOfLife(el);
    inputHight.value = "25";
    inputHight.dispatchEvent(new Event("input"));
    inputWidth.value = " ";
    inputWidth.dispatchEvent(new Event("input"));
    let arrField = Array.from(
      // @ts-ignore
      document.querySelector("table").rows,
      (row) => Array.from(row.cells)
    );
    expect(arrField.length).toBe(25);
    expect(arrField[0].length).toBe(10);

    expect(document.querySelector(".game")).toBeTruthy();
    const inputRange = document.querySelector(
      ".game__input-range"
    ) as HTMLInputElement;
    const tableEl = document.querySelectorAll("td");
    tableEl[5].dispatchEvent(new Event("click"));
    btn.dispatchEvent(new Event("click"));
    inputRange.value = "14";
    inputRange.dispatchEvent(new Event("input"));
    expect(setInterval).toHaveBeenCalledTimes(2);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 600);
  });
});
