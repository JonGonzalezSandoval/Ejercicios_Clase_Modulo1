let numeroIntroducido;

do{
    numeroIntroducido = prompt("Introduce un número entero positivo") + "";
    let mostrar = "";
    for (let index = numeroIntroducido.length; index >= 0; index--) {
        mostrar += numeroIntroducido.charAt(index);
        
    }
    console.log(mostrar);
}while(numeroIntroducido != 0);