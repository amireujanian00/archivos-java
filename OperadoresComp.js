//Operadores de comparación < > <= >= == === Devuelven un valor booleano (true o false)

console.log (4 < 7);
console.log (4 < 1);
console.log (4 > 4);
console.log (4 == 7);

var cajon = "Bufanda verde"  //Operación de asignación

console.log (3 == 3);
console.log (3 === 3);
console.log (3 == "3"); // TRUE
console.log (3 === "3");  // FALSE , number vs string

// === Igualdad estricta (verifica si el valor y el tipo de dato son los mismos)
// == Igualdad (verifica si valor del dato es el mismo )


// Asociatividad

var a = 1;
var b = 2;

var c = (a = b);

console.log(a); // 2
console.log(b); // 2
console.log(c); // 2

console.log(16 / 2 / 4);