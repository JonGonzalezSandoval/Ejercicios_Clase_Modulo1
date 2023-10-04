let num = 0;
let sumaTotal = 0;

do{
    num = parseInt(prompt("Introduce números positivos, para terminar el programa escribe 0, se ignorarán los números negativos"));
}while(isNaN(num))

while(num != 0){
    if(num < 0){
        alert("Se ignorán los valores negativos");
    }
    sumaTotal += num;
    num = parseInt(prompt("Continúa introduciendo números positivos, para terminar el programa escribe 0"));
}


alert("La suma total es: " + sumaTotal);