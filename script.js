let ageInput = document.getElementById('age');
let submitAgeBtn = document.getElementById('submitAge');

submitAgeBtn.addEventListener('click', function() {
    let age = parseInt(ageInput.value);

    // Verificar si el usuario es mayor de 10 años
    if (age <= 10) {
        console.log("Puedes acceder al contenido de clase Kids.");
    } else {
        console.log("Escoge los temas que creas conocer.");
    }
});




let durationInput = document.getElementById('duration');
let addCourseBtn = document.getElementById('addCourse');

addCourseBtn.addEventListener('click', function() {
    let duration = parseInt(durationInput.value);
    tiempoTotal += duration;
    cantidadCursos++;

    agregarCurso = confirm("¿Quieres agregar otro curso?");

    if (!agregarCurso) {
        console.log("La duración total de los cursos es de " + tiempoTotal + " minutos.");
        console.log("La duración promedio de los cursos es de " + (tiempoTotal / cantidadCursos) + " minutos.");
        alert("La duración total de los cursos es de " + tiempoTotal + " minutos.");
        alert("La duración promedio de los cursos es de " + (tiempoTotal / cantidadCursos) + " minutos.");
    }
});




let courseContainer = document.getElementById('courseContainer');

for (let i = 0; i < cursos.length; i++) {
    let course = cursos[i];

    let courseInfo = document.createElement('div');
    let tema = document.createElement('p');
    let duracion = document.createElement('p');
    let estado = document.createElement('p');

    tema.textContent = "Tema: " + course.tema;
    duracion.textContent = "Duración: " + course.duracion + " minutos";
    estado.textContent = "Estado: " + (course.visto ? "Visto" : "Aún sin ver");

    courseInfo.appendChild(tema);
    courseInfo.appendChild(duracion);
    courseInfo.appendChild(estado);

    courseContainer.appendChild(courseInfo);
}





function toggleOptions() {
    var opciones = document.getElementById("opciones");
    opciones.classList.toggle("visible");
}

function toggleSubopciones() {
    var subopciones = document.getElementById("subopciones");
    subopciones.classList.toggle("visible");
}

function toggleSkills() {
    var subopciones = document.getElementById("subopciones");
    subopciones.classList.toggle("visible");
}


document.addEventListener("DOMContentLoaded", function () {
    var claseTopic = document.querySelector("#opciones li:first-child");
    var claseSkills = document.querySelector("#opciones li:nth-child(2)");

    claseTopic.addEventListener("click", function () {
        toggleSubopciones();
    });

    claseSkills.addEventListener("click", function () {
        toggleSkills();
    });
    
});



