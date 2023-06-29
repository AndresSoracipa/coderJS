// Solicitar al usuario su edad
//se usa \xbf para mostrar simbolor y acentos
var edad = parseInt(prompt("\xbfCu\xe1l es tu edad?"));

// Verificar si el usuario es mayor de 10 años
if (edad <= 10) {
    console.log("Puedes acceder al contenido de clase Kids.");
} else {
    console.log("Escoge los temas que creas conocer.");
}


// objeto CursoIngles
var CursoIngles = {
    tema: "",
    duracion: 0,
    visto: false,
    mostrarInformacion: function () {
        var estado = this.visto ? "Visto" : "A\xfan sin ver";
        console.log("Tema: " + this.tema);
        console.log("Duraci\xf3n: " + this.duracion + " minutos");
        console.log("Estado: " + estado);
    },
};

// función para hacer una checklist de temas gramaticales
function generarChecklist(tema, visto) {
    console.log(tema + " - " + (visto ? "Visto" : "A\xfan sin ver"));
}

// array de cursos
var cursos = [];

// Al final se quiere hacer una checklist con  botones interactivos en CSS y Html para que el usuario seleccione el tiempo de duración de la clase y los temas que ya conoce esto se puede añadir a un carrito de compras donde el usuario acumula clases y paga un total
var curso1 = Object.create(CursoIngles);
curso1.tema = "Simple Present";
curso1.duracion = 30;
curso1.visto = true;
cursos.push(curso1);

var curso2 = Object.create(CursoIngles);
curso2.tema = "Simple Past";
curso2.duracion = 45;
curso2.visto = false;
cursos.push(curso2);

// muestra información de los cursos del array
console.log("Informaci\xf3n de los cursos:");
for (var i = 0; i < cursos.length; i++) {
    cursos[i].mostrarInformacion();
}

// solicitar al usuario los tiempos de los cursos y calcular la duración promedio
var tiempoTotal = 0;
var cantidadCursos = 0;
var agregarCurso = true;

while (agregarCurso) {
    var tiempoCurso = parseInt(prompt("Ingresa la duraci\xf3n del curso en minutos:"));
    tiempoTotal += tiempoCurso;
    cantidadCursos++;

    agregarCurso = confirm("\xbfQuieres agregar otro curso?");

    if (!agregarCurso) {
        console.log("La duraci\xf3n total de los cursos es de " + tiempoTotal + " minutos.");
        console.log("La duraci\xf3n promedio de los cursos es de " + (tiempoTotal / cantidadCursos) + " minutos.");
        alert("La duraci\xf3n total de los cursos es de " + tiempoTotal + " minutos.");
        alert("La duraci\xf3n promedio de los cursos es de " + (tiempoTotal / cantidadCursos) + " minutos.");
    }
}

// find()
var temaBuscado = "Simple Past";
var cursoEncontrado = cursos.find(function (curso) {
    return curso.tema === temaBuscado;
});

if (cursoEncontrado) {
    console.log("Se encontr\xf3 el curso con el tema '" + temaBuscado + "':");
    cursoEncontrado.mostrarInformacion();
} else {
    console.log("No se encontr\xf3 ning\xfan curso con el tema '" + temaBuscado + "'.");
}

// filtrado()
var cursosVistos = cursos.filter(function (curso) {
    return curso.visto === true;
});

console.log("Cursos vistos:");
for (var i = 0; i < cursosVistos.length; i++) {
    cursosVistos[i].mostrarInformacion();
}
