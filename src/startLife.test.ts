import { startLife } from "./startLife";
import { drawField } from "./drawField";

describe("drawField", () => {
  let arrField: HTMLTableCellElement[][];
  let el: HTMLElement;
  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
  });
  afterEach(() => {
    const div = document.querySelector("div");
    if (div) {
      div.remove();
    }
  });

  it("checking class changes", () => {
    drawField(el, 20, 20);
    const table = document.querySelector("table");
    if (table) {
      arrField = Array.from(table.rows, (row) => Array.from(row.cells));
    }
    arrField[6][6].dispatchEvent(new Event("click"));
    arrField[6][8].dispatchEvent(new Event("click"));
    arrField[7][7].dispatchEvent(new Event("click"));
    arrField[7][8].dispatchEvent(new Event("click"));
    arrField[8][7].dispatchEvent(new Event("click"));

    startLife();
    expect(arrField[6][8].classList.contains("activ")).toBeTruthy();
    expect(arrField[7][6].classList.contains("activ")).toBeTruthy();
    expect(arrField[7][8].classList.contains("activ")).toBeTruthy();
    expect(arrField[8][7].classList.contains("activ")).toBeTruthy();
    expect(arrField[8][8].classList.contains("activ")).toBeTruthy();

    startLife();
    expect(arrField[6][7].classList.contains("activ")).toBeTruthy();
    expect(arrField[7][8].classList.contains("activ")).toBeTruthy();
    expect(arrField[7][9].classList.contains("activ")).toBeTruthy();
    expect(arrField[8][7].classList.contains("activ")).toBeTruthy();
    expect(arrField[8][8].classList.contains("activ")).toBeTruthy();

    startLife();
    expect(arrField[6][8].classList.contains("activ")).toBeTruthy();
    expect(arrField[7][9].classList.contains("activ")).toBeTruthy();
    expect(arrField[8][7].classList.contains("activ")).toBeTruthy();
    expect(arrField[8][8].classList.contains("activ")).toBeTruthy();
    expect(arrField[8][9].classList.contains("activ")).toBeTruthy();
  });
});
