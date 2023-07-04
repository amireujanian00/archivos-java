/* var listaDeCompras = [];
listaDeCompras [3] = "Tomates";
listaDeCompras [1] = "Lechuga";  

console.log(listaDeCompras);

listaDeCompras [1];

var elementoDelArray = listaDeCompras [1];

console.log (elementoDelArray);

console.log (listaDeCompras.length); */

var colores = ["amarillo", "azul"];

colores.push("rojo");
colores.unshift("verde");
colores.pop();
colores.shift();

// console.log(colores);

var pintores = ["Picasso", "Velazques", "Van Gogh", "Dali"];

var incluyeDali = pintores.includes("Dali");

// console.log (incluyeDali);

var numeros = [10, 6, 8, 9];

var cumplenCoindicion = numeros.every((num) => {
  return num > 5;
});

// console.log (cumplenCoindicion);

var palabra = "Henri";
var palabraSeparada = palabra.split("");

palabraSeparada.pop();
palabraSeparada.push("y");

var palabraArreglada = palabraSeparada.join("");

//console.log(palabraSeparada);

// console.log(palabraArreglada);

var nums = [1, 2, 3, 4];

//nums.forEach((num) => console.log(num));

/* nums.forEach((num) => {
        if (num === 3) {
            console.log(num);
        }
}) */

var masUno = nums.map((num) => {
  return num + 1;
});

console.log(masUno);
