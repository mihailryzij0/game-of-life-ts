export function drawField(htmlElement: HTMLElement, width = 20, haight = 20) {
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
  tableEl.forEach((el, i) => {
    el.addEventListener("click", () => {
      el.classList.toggle("activ");
    });
  });
}
