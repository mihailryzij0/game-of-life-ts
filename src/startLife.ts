export function startLife(): void {
  let arrField = Array.from(
    // @ts-ignore
    document.querySelector("table").rows,
    (row) => Array.from(row.cells) as HTMLTableCellElement[]
  );
  let nextStep: { arrActiv: string[]; arrUNactiv: string[] } = {
    arrActiv: [],
    arrUNactiv: [],
  };

  for (let i = 0; i < arrField.length; i += 1) {
    //rows
    for (let j = 0; j < arrField[i].length; j += 1) {
      //column
      let neighbors = 0;
      for (let column = i - 1; column <= i + 1; column += 1) {
        for (let rows = j - 1; rows <= j + 1; rows += 1) {
          if (findNeighbors(column, rows)) {
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

  function findNeighbors(i: number, j: number) {
    if (j in arrField && i in arrField[j]) {
      return arrField[i][j].classList.contains("activ");
    } else {
      return false;
    }
  }
}
