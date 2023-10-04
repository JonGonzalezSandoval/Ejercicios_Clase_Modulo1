let cantidadLineas = parseInt(prompt("Cuantas lineas tiene la figura"));

let formaFigura = "";
for (let index = 1; index <= cantidadLineas; index++) {
    for (let indexInterior = 1; indexInterior <= index; indexInterior++) {
        formaFigura += "*";
        
    }

    formaFigura+= "\n";
    
}


console.log(formaFigura);