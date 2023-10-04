let numero = prompt("Introduce un número con 3 dígitos") + "";

let resultado = 0;

for (let index = 0; index < numero.length; index++) {
    resultado += parseInt(numero.charAt(index));
    
}

console.log(resultado);
