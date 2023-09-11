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
    imagenesCargadas++;
    // Si true, ocultamos el spinner
    if (imagenesCargadas === totalImagenes){
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
    cargarFotos();
}

//funcion para configurar atributos en el DOM
setAtrubutos = (elemento,atributos) =>{
    for (const clave in atributos){
        elemento.setAttribute(clave,atributos[clave]);
    }
}

//funcion para mostrar fotos en el DOM
cargarFotos = () => {
    imagenesCargadas =0;
    totalImagenes = fotos.length;
    //agregar atributos a las imagenes
    fotos.forEach((foto) => {
        //crear link para la foto
        const item = document.createElement("a");
        setAtrubutos(item,{
           href: foto.links.html, //link de la foto
           target: "_blank", //abrir en una nueva pestaña
        });
        //crear imagen para la foto
        const img = document.createElement("img");
        setAtrubutos(img,{
            src: foto.urls.regular, //link de la imagen
            alt: foto.alt_description, //descripcion de la imagen
            title: foto.alt_description, //titulo de la imagen
        });
        //evento para verificar carga de imagenes
        img.addEventListener("load",verificarImagenes);
        item.appendChild(img); //agregar imagen al link
        contenedorImg.appendChild(item); //agregar link al contenedor
    });
}

//funcion para cargar mas fotos
window.addEventListener("scroll", () => {
   //verificar si se llego al final de la pagina
    console.log("scroll");
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && listo){
        listo = false;
        getPhotos();
    }
});


getPhotos();

