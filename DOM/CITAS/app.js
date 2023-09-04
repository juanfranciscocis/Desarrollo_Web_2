//seleccionar elementos del DOM
let boton = document.getElementById("button-cambiar");
let cita = document.getElementById("cita");
let autor = document.getElementById("autor");

// funcion para generar indice aleatorio
function generarEntero (minimo, maximo){
    minimo = Math.ceil(minimo);
    maximo = Math.floor(maximo);
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
}

// funcion para generar la cita aleatoria
function cambiarCita(){
    let aleatorio = generarEntero(0, citas.length);
    cita.textContent = citas[aleatorio].texto;
    autor.textContent = citas[aleatorio].autor;
}

// evento para cambiar la cita
boton.addEventListener("click", cambiarCita);

//generar cita al cargar la pagina
cambiarCita();