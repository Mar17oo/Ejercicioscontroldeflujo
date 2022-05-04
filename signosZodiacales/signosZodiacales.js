var hora = prompt(parseInt ("Ingresa tu día"));

if  (hora<13){// si la hora es menor a 13
    console.log("Es de mañana, desayuno rico");
} else if(hora <= 19){
    //de otro modo si la hora es menor o igual a 19
console.log("Es de tarde, come rico");} 
else{// si no
    console.log("Es de noches, cena rico");
}

//Ejercicio HORARIO Juan Carlos XD

var hora = prompt("Ingresa solo la hora actual en formato de 24 horas");

if (hora < 12){
    console.log("Buenos días.");
} else if (hora >= 12 && hora <=18) {
    console.log("Buenas tardes.");
} else {
    console.log("Buenas noches.")
}
/*
En este ejercicio, Juan Carlos utiliza Los operadores Lógicos para evaluar si la hora es menor a 12, mayor o igual a 12 y menor o igual a 18. Con esto, podemos tener un poco más de control al momento de evaluar las condiciones.
*/

// EJERCICIO HORARIO GERARDO

var hora = prompt("Ingresa solo la hora actual en formato de 24 horas");

if (hora >= 0 && hora <=24) {
    //Evaluar que la hora este dentro del rango

    if (hora >= 7 && hora <=11){
        console.log("Buenos dias.");
    } else if (hora >= 12 && hora <=18) {
        console.log("Buenas tardes.");  
    } else if (hora >= 18 && hora <=24 ){
        console.log("Buenas Noches.");  
    }else {
        console.log("Buenas madrugadas.");
    }
}else{
        console.log("Dato mal ingresado");
    }
    

