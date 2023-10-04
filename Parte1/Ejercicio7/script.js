let ano = parseInt(prompt("Introduce un año y te diré si es bisiesto o no"));

if(ano % 4 == 0 && ano %100 != 0 || ano %100 == 0 && ano %400 == 0){
    alert("El año " + ano + " es bisiesto!");
}else{
    alert("El año " + ano + " no es bisiesto!");
}