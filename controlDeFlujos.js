function viajar (destino) {
    if (destino === "Brasil") {
        console.log("Gire a la Izquierda");
    } else if (destino === "Argentina") {
        console.log("Gire a la Derecha");
    } else {
        console.log("Nos perdimos");
    }
}

viajar("Prueba");

function puedeManejar (edad){
    if (edad >= 18) {
        console.log("Si puede manejar");
    } else {
        console.log ("No puede manejar");
    }
}

puedeManejar (17);
