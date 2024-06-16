function obtenerCantidad(e){
    const opcion = document.getElementsByClassName("botonIng");
    const b8 = opcion[0];
    const b16 = opcion[1];
    const b32 = opcion[2];
}

function lobby(e){
    const elementoCaja = document.getElementById("caja1");
    elementoCaja.remove();
}

function game(e){

}

document.addEventListener("DOMContentLoaded", (event) => {
    const btnAdd = document.getElementsByClassName("botonIng");
    Array.from(btnAdd).forEach(el => {
        el.addEventListener("click", lobby);
    });
});

