export function drawField(
  htmlElement: HTMLElement,
  width: number,
  haight: number,
  g?: { arrActiv: string[]; arrUNactiv: string[] }
) {
  let field = Array.from({ length: width }).map(
    () => Array.from({ length: haight }).fill(0) as number[]
  );
  const rowIterator = (row: number[]) => {
    return `<tr>${row
      .map(() => {
        return `<td></td>`;
      })
      .join("")}</tr>`;
  };
  const table = `<table>${field.map(rowIterator).join("")}</table>`;

  // eslint-disable-next-line no-param-reassign
  htmlElement.innerHTML = table;
  let tableEl = htmlElement.querySelectorAll("td") as NodeListOf<Element>;
  tableEl.forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("activ");
    });
  });
  if (g) {
    let arrField = Array.from(
      // @ts-ignore
      document.querySelector("table").rows,
      (row) => Array.from(row.cells)
    );
    g.arrActiv.forEach((element) => {
      let [x, y] = element.split(":");
      arrField[+x][+y].classList.add("activ");
    });
  }
}
