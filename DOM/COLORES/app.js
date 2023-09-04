//seleccionar elementos del DOM
const btn = document.querySelector('button');
const color = document.getElementById('color');

// funcion que genera colr hexadecimal
function generarColor(){
    let caracteres = "0123456789ABCDEF";
    let colorHex = "#";
    for(let i = 0; i < 6; i++){
        colorHex += caracteres[Math.floor(Math.random() * 16)];
    }
    return colorHex;
}

// funcion que cambia el color de fondo
btn.addEventListener('click', ()=>{
    let colorHex = generarColor();
    document.body.style.backgroundColor = colorHex;
    color.textContent = colorHex;

});
