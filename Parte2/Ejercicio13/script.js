let listaEdades = [];
let edadTotal = 0;

for (let index = 0; index < 20; index++) {
    listaEdades[index] = Math.floor(Math.random()*18) + 18;
}

for (let index = 0; index < listaEdades.length; index++) {
    console.log(listaEdades[index]);
    edadTotal += listaEdades[index];
}

console.log("La edad media de los alumnos es " + edadTotal/listaEdades.length);
