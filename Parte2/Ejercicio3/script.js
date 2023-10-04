
    let opcion = prompt("Quieres lo números pares o impares (P/I)?").toUpperCase();

while(opcion != "P" && opcion != "I"){

    opcion = prompt("Necesito que me especifiques con P o I que tipo de número quieres").toUpperCase();

}

let inicioSerie = opcion == "P" ? 2 : 1;
let seguida = "";

for (let index = inicioSerie; index <= 100; index += 2) {
    seguida += index + " "
    
}
 console.log(seguida);