let contraseña = prompt("Introduce una contraseña");

let valida = true;

// La expresión regular "/^\p{Lu}/u" /^\p{Lu} esa parte compara si la primera letra de la palabra o cadena que le paso es mayuscula, /u es la compatibilidad con unicode


if(contraseña.length < 8 || !/^\p{Lu}/u.test(contraseña) || !/\p{N}/u.test(contraseña)){
    valida = false;
}


if(valida)
    console.log("Contraseña válida");
else
    console.log("Contraseña no válida");

