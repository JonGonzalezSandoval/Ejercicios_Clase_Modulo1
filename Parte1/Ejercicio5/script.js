let numerosIntroducidos = prompt("Introduce una suma EJ:(25+21)");



if(numerosIntroducidos != null){
    console.log(numerosIntroducidos.substring(0, numerosIntroducidos.indexOf("+")).trim() + " y " + numerosIntroducidos.substring(numerosIntroducidos.indexOf("+")+1).trim());
}else{
    console.log("No me has introducido ningun valor");
}