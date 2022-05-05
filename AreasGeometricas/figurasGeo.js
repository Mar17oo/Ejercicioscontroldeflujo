//Ejercicio 2
alert("Bienvenido al mundo de las figuras geométricas");
figura = prompt("Escriba su figura a dibujar: cuadrado, círculo, triángulo o rectángulo ");
String(figura);
//switch
switch (figura) {
    case "cuadrado":
        lado = parseInt(prompt("Ingrese el valor del lado: "));
        area1 = lado*lado;
        Perimetro1 = lado + lado + lado + lado;
        console.log("Seleccionaste un cuadrado con un área de "+ area1+" y un perímetro de "+ Perimetro1);
        break;
    case "circulo":
        radio = parseInt(prompt("Ingrese el valor del radio: "));
        pi = 3.1416;
        area2 = pi*(Math.pow(radio,2));
        Perimetro2 = Math.round(2*pi*radio);
        console.log("Seleccionaste un círculo con un área de "+ area2 +" y un perímetro de "+ Perimetro2);
        break;
    case "rectangulo":
        var altura1 = parseInt(prompt("Ingrese el valor de la altura: "));
        var base1 = parseInt(prompt("Ingrese el valor de la base "));
        area2= base1 * altura1;
        Perimetro2 = 2 * altura1 + 2* base1 ;
        console.log("Seleccionaste un rectángulo con un área de "+ area2 +" y un perímetro de "+ Perimetro2);
        break;
    case "triangulo":
        var base1 = parseInt(prompt("Ingrese el valor de la base "));
        var altura1 = parseInt(prompt("Ingrese el valor de la altura: "));
        let ladoTriangulo = parseInt(prompt("Ingrese el valor del lado de su triángulo: "));
        areatriangulo = (base1 * altura1) / 2
        perimetroTriangulo = ladoTriangulo * 3;
        console.log("Seleccionaste un triángulo con un área de "+ areatriangulo + " cm2 " +" y un perímetro de "+ perimetroTriangulo + " cm ");
        break;
                }