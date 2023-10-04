let numeroUno = parseInt(prompt("Introduce el número a dividir"));
let numeroDos = parseInt(prompt("Introduce el número divisor"));


//let numeroUno = 50;
//let numeroDos = 15;
let resto;

let resultado = Math.trunc(numeroUno/numeroDos);

//console.log(resultado);

resto = numeroUno - resultado * numeroDos;

console.log("El resto es = " + resto);

