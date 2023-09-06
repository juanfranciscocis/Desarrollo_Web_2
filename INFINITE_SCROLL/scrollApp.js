const contenedorImg = document.getElementById("contenedor-img");
const loader = document.getElementById("loader");

let listo = false;
let imagenesCargadas = 0;
let totalImagenes = 0;
let fotos = [];
let cargaInicial = true;

// Unsplash API
const initalCount = 5;
const apiKey = "-KsOXvdzrmis5K5FFHbUNb1HOJks2OpVmYARueRdjAw";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${initalCount}`;

// Nuevo Bloque
function updateAPIURLWithNewCount(picCount) {
   const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${picCount}`;
}


//funciom para verificar carga de imagenes
verificarImagenes = () =>{
    totalImagenes++;
    if (totalImagenes === totalImagenes){
        listo = true;
        loader.hidden = true;
        count = 30;
    }
}

//funcion para obtener fotos del API
async function getPhotos() {
    const resp = await fetch(apiUrl);
    fotos = await resp.json();
    console.log(fotos);
}

getPhotos();

