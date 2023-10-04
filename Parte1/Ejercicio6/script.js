let edadUsuario = parseInt(prompt("Introduce tu edad: "));

if(edadUsuario < 18 ){
    alert("No puedes alquilar un coche, no tienes la edad suficiente para conducirlo!")
}else{
    //Soy consciente que no hace falta un if para el if a continuación pero quería probar el ? como if para darle valor a una variable
    let carnet = prompt("Tienes carnet de conducir? (Si/No)") == "Si" ? true : false;
    if(!carnet){
        alert("No tienes carnet de conducir, no puedes alquilar uno de nuestros vehículos");
    }else{
        let nombre = prompt("Introduce tu nombre y apellido");
        let ciudadRecogida = prompt("Introduce la ciudad en la que quieres recoger tu coche");
        let diasTotales = parseInt(prompt("Durante cuantos días quieres alquilar el coche?"));
        let gastoTotal = Math.trunc(diasTotales / 7) * 150 + diasTotales%7 * 25;
        alert("Nombre: " + nombre + "\n Ciudad de recogida: " + ciudadRecogida + "\n El precio total a pagar es de: " + gastoTotal + " por los " + diasTotales + " dias.");
    }
}