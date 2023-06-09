// Solicitar al usuario su edad
//se usa \xbf para mostrar simbolor y acentos
var edad = parseInt(prompt("\xbfCu\xe1l es tu edad?"));

// Verificar si el usuario es mayor de 10 años
if (edad <= 10) {
    console.log("Puedes acceder al contenido de clase Kids.");
} else {
    console.log("Escoje los temas que creas conocer.");
}

// Solicitar al usuario La duracion de la clase
var limiteSuperior = parseInt(prompt("Ingresa la duraci\xf3n de tu clase (10-90min):"));

// ciclo while,  muestra los numeros de 5 en 5 hasta el número que escriba, la idea es poner un tope en 90  
var numero = 5;
while (numero <= limiteSuperior) {
    console.log(numero);
    numero += 5;
}

// Temas gramaticales y agregar más después
var tema1 = "Simple Present";
var tema2 = "Simple Past";
var tema3 = "Present Perfect";

// Al final se quiere hacer una checklist con  botones interactivos en CSS y Html para que el usuario seleccione el tiempo de duración de la clase y los temas que ya conoce
var vistoTema1 = false;
var vistoTema2 = false;
var vistoTema3 = false;

// Función para hacer una  checklist de temas gramaticales
function generarChecklist(tema, visto) {
    console.log(tema + " - " + (visto ? "Visto" : "A\xfan sin ver"));
}

// Marcar los temas como vistos o no vistos
vistoTema1 = confirm("\xbfHas visto el tema '" + tema1 + "'? (Aceptar o Ok para s\xed, Cancel para no)");
vistoTema2 = confirm("\xbfHas visto el tema '" + tema2 + "'? (Aceptar o Ok para s\xed, Cancel para no)");
vistoTema3 = confirm("\xbfHas visto el tema '" + tema3 + "'? (Aceptar o Ok para s\xed, Cancel para no)");

// Generar la checklist de temas gramaticales
console.log("Checklist de temas gramaticales:");
generarChecklist(tema1, vistoTema1);
generarChecklist(tema2, vistoTema2);
generarChecklist(tema3, vistoTema3);



