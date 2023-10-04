//Hablemos con Bob



let fraseRecibida = prompt("Dile algo a Bob!");

console.log(fraseRecibida);

if(fraseRecibida.length == 0){
    alert("Vale, con que esas tenemos...");
}else{
    if(fraseRecibida == fraseRecibida.toUpperCase()){
        if(fraseRecibida.indexOf("?") != -1){
            alert("¡Eh!, ¡Tranquilízate! Yo sé lo que hago");
        }else{
            alert("¡Eh!, Tranquilízate");
        }
    }else{
        if(fraseRecibida.indexOf("?") != -1){
            alert("¡Claro!");
        }else{
            alert("Sin más");
        }
    }
}