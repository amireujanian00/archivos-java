/* function mayorymenorypar(num){
    if(num > 5 && num < 10 && num % 2 === 0)
    console.log (true);
    else console.log(false);
}

mayorymenorypar(7);
mayorymenorypar(8); */

function operadorOr (str) {
    if (str === "Amir" || str.length < 2) 
    console.log(true);
    else console.log(false);
};

operadorOr ("A");

function negación (permiso) {
    if (permiso !== true)
    console.log ("Tiene permiso");
};

negación (true);
negación (false);

function condicionCompleja (num) {
    if (num > 9 && num % 2 === 0 || num ===3)
    console.log(true);
    else console.log (false);
};

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);


