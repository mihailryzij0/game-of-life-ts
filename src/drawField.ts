export function drawField(
  htmlElement: HTMLElement,
  width: number,
  haight: number,
  nextStep?: { arrActiv: string[]; arrUNactiv: string[] }
) {
  const field = Array.from({ length: width }).map(
    () => Array.from({ length: haight }).fill(0) as number[]
  );
  const rowIterator = (row: number[]) =>
    `<tr>${row.map(() => `<td></td>`).join("")}</tr>`;
  const table = `<table>${field.map(rowIterator).join("")}</table>`;

  // eslint-disable-next-line no-param-reassign
  htmlElement.innerHTML = table;
  const tableEl = htmlElement.querySelectorAll("td") as NodeListOf<Element>;
  tableEl.forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("activ");
    });
  });
  if (nextStep) {
    const parentSelector = document.querySelector("table");
    if (parentSelector) {
      const arrField = Array.from(parentSelector.rows, (row) =>
        Array.from(row.cells)
      );
      nextStep.arrActiv.forEach((element) => {
        const [x, y] = element.split(":");
        arrField[+x][+y].classList.add("activ");
      });
    }
  }
}
