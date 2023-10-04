let dia = parseInt(prompt("Introduce una fecha, empezamos por el día"));
let mes = parseInt(prompt("Seguimos por el mes"));
let ano = parseInt(prompt("y acabamos con el año"));

let valida = true;

let mesesLargos = [1, 3, 5, 7, 8, 10, 12];
let diasMes = 30;

function compruebaBisiesto(anoBisiesto) {
    if(anoBisiesto % 4 == 0 && anoBisiesto %100 != 0 || anoBisiesto %100 == 0 && anoBisiesto %400 == 0){
       return true;
    }else{
        return false;
    }
}

function sumaDia() {
    dia++;
    if(dia > diasMes){
        dia = 1;
        mes++;
        if(mes > 12){
            mes = 1;
            ano++;
        }
    }

    return "Sumando un día a la fecha introducida es " + dia + "/" + mes + "/" + ano ;
}

if( mes >= 1 && mes <= 12){    
    if (mes == 2) {
        if(compruebaBisiesto(ano)){
            diasMes = 29;
        }else{
            diasMes = 28;
        }
    }else{
        if (mesesLargos.includes(mes))
        diasMes = 31;
    }  
}else{
    valida = false;
}


if(valida && dia >= 1 && dia <= diasMes){
    console.log(sumaDia());
}else{
    console.log("la fecha introducida es " + dia + "/" + mes + "/" + ano + " no es válida");
}



