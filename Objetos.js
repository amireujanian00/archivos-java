var deportes = {
  conBalon: ["Futbol", "Basket", "Rugby"],
  sinBalon: ["Boxeo", "Surf", "Trekking"],
};

var persona = { nombre: "Lucas", edad: 26, estudios: { esProgramador: true } };

// console.log (persona.estudios.esProgramador);

persona.nombre = "Martin";
persona.edad = 32;

// console.log (persona.nombre);
// console.log (persona.edad);

var autos = {};

autos.marcas = ["Ford", "Audi", "Ferrari"];

delete autos.marcas;

// console.log(autos);

var misFunciones = {
  saludar: function () {
    // console.log("Hola");
  },
};

misFunciones.saludar();

var atuendos = { manos: ["Guantes", "Anillos"], pies: ["Zapatos", "Soquetes"] };

// console.log(atuendos.manos);

atuendos["piernas"] = ["Bermudas", "Pantalones"];

// console.log(atuendos);

var comidas = {};

var diferenciaDeNotaciones = function (propUno, propDos) {
  comidas[propUno] = ["Frutas", "Vegetales"];
  comidas[propDos] = ["Hamburguesa", "Papas Fritas"];
};

// diferenciaDeNotaciones ("Saludable", "No_Saludable");
// console.log(comidas);

var libro = { autor: "Borges", genero: "Policial", año: 1990 };
var tienePropiedad = libro.hasOwnProperty("autor");

// console.log(tienePropiedad);

var todasLasPropiedades = Object.keys(libro);
//console.log(todasLasPropiedades);

var mundo = { continentes: 7, paises: 195, oceanos: 5 };

// for (var prop in mundo) {
//   console.log("Esta es la propiedad: " + prop);
//   console.log("Este es el valor: " + mundo[prop] + "\n");
// }

var mascota = {
  animal: "Perro",
  raza: "Ovejero Alemán",
  amistoso: true,
  dueña: "María López",
  info: function () {
    console.log("Mi perro es un " + this.raza);
  },
};

mascota.info();
