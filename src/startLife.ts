export function startLife(): { arrActiv: string[]; arrUNactiv: string[]; } {
  let arrField = Array.from(
    // @ts-ignore
    document.querySelector("table").rows,
    (row) => Array.from(row.cells)
  );
  console.log(arrField)
  let nextStep: { arrActiv: string[]; arrUNactiv: string[] } = {
    arrActiv: [],
    arrUNactiv: [],
  };

  for (let i = 0; i < arrField.length; i += 1) {
    for (let j = 0; j < arrField[i].length; j += 1) {
      let neighbors = 0;
      for (let column = i - 1; column <= i + 1; column += 1) {
        for (let rows = j - 1; rows <= j + 1; rows += 1) {
          if (ht(column, rows)) {
            neighbors += 1;
          }
        }
      }
      if (neighbors === 3) {
        nextStep.arrActiv.push(`${i}:${j}`);
      } else {
        nextStep.arrUNactiv.push(`${i}:${j}`);
      }
    }
  }
  nextStep.arrActiv.forEach((element, i) => {
    let [x, y] = element.split(":");
    arrField[+x][+y].classList.add("activ");
  });
  nextStep.arrUNactiv.forEach((element) => {
    let [x, y] = element.split(":");
    arrField[+x][+y].classList.remove("activ");
  });

  function ht(i: number, j: number) {
    if (i in arrField && j in arrField[i]) {
      return arrField[i][j].className === "activ";
    } else {
      return false;
    }
  }
  return nextStep
}
