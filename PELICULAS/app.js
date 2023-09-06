
const urlApi = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e09310a3069d65877f66291ef374d7d1"
const urlSearch = "https://api.themoviedb.org/3/search/movie?&api_key=e09310a3069d65877f66291ef374d7d1&query="
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const rutaImg = "https://image.tmdb.org/t/p/w1280";
async function getPeliculas (url) {
    const response = await fetch(url);
    const data = await response.json();
    const peliculas = data.results;
    console.log(peliculas);
    return peliculas;
}


cargarPeliculas = (peliculas) => {
    //limpiar la secccion main
    main.innerHTML = "";
    //recorrer el array de peliculas
    peliculas.forEach(pelicula => {
        const {poster_path, title, vote_average, overview} = pelicula; // destructuring means that we are taking the values of the object pelicula and storing them in variables

        //tenemos que crear el primer elemento del DOM
        const contenedor = document.createElement("div");
        contenedor.classList.add("pelicula");

        contenedor.innerHTML = `
            <img src="${rutaImg + poster_path}" alt="${title}" />
            <div class="info">
                <h3>${title}</h3>
                <span class="${getClass(vote_average)}">${vote_average}</span>
            </div>
            <div class="sinopsis">
                <h3>Sinopsis</h3>
                <p>${overview}</p>
            </div>
        `;
        main.appendChild(contenedor);
    });
}

getClass = (calificacion) => {
    if(calificacion >= 8) {
        return "green";
    } else if (calificacion >= 5) {
        return "orange";
    } else {
        return "red";
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const textoBuscar = search.value;
    if(textoBuscar) {
        getPeliculas(urlSearch + textoBuscar).then(peliculas => cargarPeliculas(peliculas));
        search.value = "";
    }
});

getPeliculas(urlApi).then(peliculas => cargarPeliculas(peliculas));

