let numero = prompt("Introduce tu fecha de nacimiento separada con guiones");


let listaNumeros = numero.split("-");

let resultado = 0;

    for (let index = 0; index < listaNumeros.length; index++) {
        resultado += parseInt(listaNumeros[index]);
        
    }

while(resultado > 10){
    nuevoNumero = resultado + "";
    resultado = 0;
    for (let index = 0; index < nuevoNumero.length; index++) {
        resultado += parseInt(nuevoNumero.charAt(index));
        
    }
    
}

console.log(resultado);
