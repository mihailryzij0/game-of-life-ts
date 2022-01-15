import { drawField } from "./drawField";

describe("createGameOfLife", () => {
  let el: HTMLElement;
  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
  });
  afterEach(() => {
    // @ts-ignore
    document.querySelector("div").innerHTML = null;
  });

  it("building a playing field", () => {
    drawField(el);
    expect(document.querySelector("td")).toBeTruthy();
    expect(document.querySelectorAll("tr").length).toBe(20);
  });
  it("adding a class when clicking on a cell and deleting", () => {
    drawField(el);
    const tableEl = document.querySelectorAll("td");
    tableEl[5].dispatchEvent(new Event("click"));
    expect(tableEl[5].classList.contains("activ")).toBeTruthy();
    tableEl[5].dispatchEvent(new Event("click"));
    expect(tableEl[5].classList.contains("activ")).toBeFalsy();
  });
});