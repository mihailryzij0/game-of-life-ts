export function startLife(): void {
  let arrField = Array.from(
    // @ts-ignore
    document.querySelector("table").rows,
    (row) => Array.from(row.cells)
  );
  let nextStep: { arrActiv: string[]; arrUNactiv: string[] } = {
    arrActiv: [],
    arrUNactiv: [],
  };

  for (let i = 0; i < arrField.length; i += 1) { //rows
    for (let j = 0; j < arrField[i].length; j += 1) {//column
      let neighbors = 0;
      for(let column = i -1;column<= i + 1 ;column +=1){ 
        for(let rows = j -1;rows<= j + 1 ;rows +=1){
          if(ht(column,rows)) {
            neighbors += 1
            console.log('goo')
          }
        }
      }
      if (neighbors === 3) {
        nextStep.arrActiv.push(`${i}:${j}`);
      }  else {
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

  
  function ht(i:number,j:number){
    if(j in arrField && i in arrField[j]){
      console.log(arrField[i][j].classList.contains("activ"))
      return arrField[i][j].classList.contains("activ");
    }else{
      // console.log(false)
      return false
    }
  }
  function fpm(i: number) {
   if (i == 0) return arrField.length;
    else return i;
  }
  function fpp(i: number) {
    if (i == arrField.length - 1) return 0;
    else return i;
  }
}
