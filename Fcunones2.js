function cuidadoConElConsoleLog(nombre) {
    console.log (nombre);
    return nombre;
}

function OtraFunción () {
    return (
        "El nombre retornado por la función 'cuidadoConElConsoleLog' es: " + cuidadoConElConsoleLog ("Amir")
        );
}

function cuidadoConElReturn (nombre) {
    return nombre;
    console.log(nombre);
}

