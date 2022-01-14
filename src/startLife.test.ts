import { startLife } from "./startLife";
import { drawField } from "./drawField";

describe("", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
  });
  afterEach(() => {
    document.querySelector("div").innerHTML = null;
  });

  it("", () => {
    drawField(el);
    const tableEl = document.querySelectorAll("td");
    tableEl[130].dispatchEvent(new Event("click"));
    tableEl[150].dispatchEvent(new Event("click"));
    tableEl[170].dispatchEvent(new Event("click"));
    startLife();
    tableEl[149].classList.contains("activ");
    tableEl[150].classList.contains("activ");
    tableEl[151].classList.contains("activ");
    expect(tableEl[151].classList.contains("activ")).toBeTruthy();
    expect(tableEl[150].classList.contains("activ")).toBeTruthy();
    expect(tableEl[149].classList.contains("activ")).toBeTruthy();
  });
});
