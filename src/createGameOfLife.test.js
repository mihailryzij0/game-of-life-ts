import {createGameOfLife} from "./createGameOfLife"

describe("", ()=>{
  let el;
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
    `
  });
  
  jest.useFakeTimers();
  jest.spyOn(global, "setInterval");
  afterEach(() => {
    document.querySelector("div").innerHTML = null;
  });
  it("",()=>{
    // const element= el.querySelector(".game");
    createGameOfLife(el);
    expect(document.querySelector(".game")).toBeTruthy();
    let tableEl = document.querySelectorAll("td");
     tableEl[5].dispatchEvent(new Event("click"))
     const btn = document.querySelector(".game__btn")
     btn.dispatchEvent(new Event("click"))
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);

  })
  it("",()=>{
    // const element= el.querySelector(".game");
    createGameOfLife(el);
    expect(document.querySelector(".game")).toBeTruthy();
     let inputWidth = document.querySelector(".game__input-width");
     let inputHight = document.querySelector(".game__input-height");
     inputWidth.value = "25";
     inputHight.value = "25";
     const btn = document.querySelector(".form-btn")
     btn.dispatchEvent(new Event("click"));
     let arrField = Array.from(
      document.querySelector("table").rows,
      (row) => Array.from(row.cells)
    );
     expect(arrField.length).toBe(25);
     expect(arrField[1].length).toBe(25);

     inputHight.value = "25";
     inputHight.value = "";
     btn.dispatchEvent(new Event("click"));
     arrField = Array.from(
      document.querySelector("table").rows,
      (row) => Array.from(row.cells)
    );
    expect(arrField.length).toBe(25);
    expect(arrField[1].length).toBe(20);
  })
  it("",()=>{
    // const element= el.querySelector(".game");
    createGameOfLife(el);
    expect(document.querySelector(".game")).toBeTruthy();
     let inputRange = document.querySelector(".game__input-range");
     let tableEl = document.querySelectorAll("td");
     tableEl[5].dispatchEvent(new Event("click"))
     const btn = document.querySelector(".game__btn")
     btn.dispatchEvent(new Event("click"));
     inputRange.value = "14";
     inputRange.dispatchEvent(new Event("input"));
     expect(setInterval).toHaveBeenCalledTimes(2);
     expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1400);
  })
})