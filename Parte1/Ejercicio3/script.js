let minutos = parseInt(prompt("Introduce un número de minutos"));

let dias = Math.trunc( minutos / 1440 );
let años = 0;



if(dias > 365){
    años = Math.trunc(dias / 365);
    dias = dias % 365;
}


console.log("Son  " +  años + " años y " + dias + " días");