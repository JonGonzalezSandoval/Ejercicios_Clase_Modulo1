let listaValores = [];

for (let index = 0; index < 10; index++) {
    listaValores[index] = 1;
    
}

let posicion = parseInt(prompt("Introduce un número entre 0 y 9, te mostraremos el valor de la posición y lo multiplicaremos por dos, para salir teclea un número que no esté en el rango solicitado"));
while (isNaN(posicion)) {
        posicion = parseInt(prompt("No has introducido un número. Introduce un número entre 0 y 9, te mostraremos el valor de la posición y lo multiplicaremos por dos, para salir teclea un número que no esté en el rango solicitado"));
    }

while( posicion >= 0 && posicion <= 9){
    
    console.log("Valor de posición " + posicion + " es: " + listaValores[posicion]);
    listaValores[posicion]*=2;

    posicion = parseInt(prompt("Introduce un número entre 0 y 9, te mostraremos el valor de la posición y lo multiplicaremos por dos, para salir teclea un número que no esté en el rango solicitado"));
    while (isNaN(posicion)) {
        posicion = parseInt(prompt("No has introducido un número. Introduce un número entre 0 y 9, te mostraremos el valor de la posición y lo multiplicaremos por dos, para salir teclea un número que no esté en el rango solicitado"));
    }
}