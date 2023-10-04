let numero = prompt("Introduce un número y te dire si contiene solo digitos pares, impares o ambos");


let par = false;
let impar = false;

for (let index = 0; index < numero.length; index++) {
    if(parseInt(numero.charAt(index))%2 == 0){
        par = true;
    }   else{
        impar = true;
    } 

}


if(par && !impar){
    alert("El número " + numero + " está compuesto solo de números pares");
}else if(impar && !par){
    alert("El número " + numero + " está compuesto solo de números impares")
}else{
    alert("El número " + numero + " está compuesto por número tanto pares cómo impares");
}