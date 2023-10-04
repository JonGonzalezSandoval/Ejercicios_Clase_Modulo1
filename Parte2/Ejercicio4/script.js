

let columnas = "";

for (let index = 1; index <= 12 ; index++) {
    let elevar = index%2 == 0 ? 3 : 2;
    columnas += index + " " + Math.pow(index, elevar) + "\n";
}

console.log(columnas);