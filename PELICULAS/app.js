
const urlApi = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e09310a3069d65877f66291ef374d7d1"
async function getPeliculas (url) {
    const response = await fetch(url);
    const data = await response.json();
    const peliculas = data.results;
    console.log(peliculas);
    return peliculas;
}

//llamado a la funcion
getPeliculas(urlApi);



