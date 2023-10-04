

let h1 = document.querySelector("h1");


console.log(h1);

let newHtml = `<h3>Cómo están los máquinas</h3>`;

document.querySelector("body").innerHTML += newHtml;
document.querySelector("h3").className = `subtitle`;




let p = document.createElement("p");

p.className = "paragraph";
p.textContent = "Soy un parrafo";
p.style.border = "1px solid green";



let div = document.createElement("div");

div.className = "paragraph";
div.textContent = "soy un div";
div.style.border = "1px solid pink";


let p2 = document.createElement("p");

p2.className = "paragraph";
p2.textContent = "soy un parrafo dentro del div";
p2.style.border = "1px solid green";

//TODO:SDGFAKHSFDKSHB


//appendchild añade a la etiqueta seleccionada la etiqueta que creamos aquí.
document.querySelector("body").appendChild(div);
document.querySelector("body").appendChild(p);
document.querySelector("div").appendChild(p2);




document.querySelector("#btn").addEventListener("click", function () {
    alert("Hola que tal")
});
