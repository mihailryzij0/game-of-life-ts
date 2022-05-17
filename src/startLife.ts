type startLife = { arrActiv: string[]; arrUNactiv: string[] } | undefined;
export function startLife(): startLife {
  const tableEl = document.querySelector("table");
  let arrField: HTMLTableCellElement[][];
  if (tableEl) {
    arrField = Array.from(tableEl.rows, (row) => Array.from(row.cells));

    const nextStep: { arrActiv: string[]; arrUNactiv: string[] } = {
      arrActiv: [],
      arrUNactiv: [],
    };
    const checkClass = function (i: number, j: number): boolean {
      if (i in arrField && j in arrField[i]) {
        return arrField[i][j].className === "activ";
      }
      return false;
    };

    for (let i = 0; i < arrField.length; i += 1) {
      for (let j = 0; j < arrField[i].length; j += 1) {
        let neighbors = 0;
        for (let column = i - 1; column <= i + 1; column += 1) {
          for (let rows = j - 1; rows <= j + 1; rows += 1) {
            if (column === i && rows === j) {
              neighbors += 0;
            } else if (checkClass(column, rows)) {
              neighbors += 1;
            }
          }
        }
        if (neighbors === 3) {
          nextStep.arrActiv.push(`${i}:${j}`);
        } else if (neighbors === 2 && arrField[i][j].className === "activ") {
          nextStep.arrActiv.push(`${i}:${j}`);
        } else {
          nextStep.arrUNactiv.push(`${i}:${j}`);
        }
      }
    }
    nextStep.arrActiv.forEach((element) => {
      const [x, y] = element.split(":");
      arrField[+x][+y].classList.add("activ");
    });
    nextStep.arrUNactiv.forEach((element) => {
      const [x, y] = element.split(":");
      arrField[+x][+y].classList.remove("activ");
    });
    return nextStep;
  }
  return undefined;
}
