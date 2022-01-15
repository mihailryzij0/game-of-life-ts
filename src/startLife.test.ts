import {startLife} from "./startLife";
import {drawField} from './drawField'

describe("drawField",()=>{
  let el :HTMLElement;
  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
  });
  afterEach(() => {
    // @ts-ignore
    document.querySelector("div").innerHTML = null;
  });

  it("checking class changes",()=>{
    drawField(el);
    const tableEl = document.querySelectorAll("td");
    tableEl[130].dispatchEvent(new Event("click"))
    tableEl[150].dispatchEvent(new Event("click"))
    tableEl[170].dispatchEvent(new Event("click"))
    startLife();
    tableEl[149].classList.contains("activ")
    tableEl[150].classList.contains("activ")
    tableEl[151].classList.contains("activ")
    expect(tableEl[151].classList.contains("activ")).toBeTruthy();
    expect(tableEl[150].classList.contains("activ")).toBeTruthy();
    expect(tableEl[149].classList.contains("activ")).toBeTruthy();
   
  })
})