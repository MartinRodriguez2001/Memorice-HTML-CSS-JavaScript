function lobby(e){//elegir opción y pasar a la siguiente fase
    const elementoCaja = document.getElementById("caja1");
    elementoCaja.remove();
}

function tablero(e){// generación de tablero
    const tablero = document.createElement("div")
    tablero.className = "tablero"
    const caja2 = document.getElementById("caja2")
    caja2.appendChild(tablero)

}

function juego8(e){
    const botones = docuement.getElementsByClassName("botonIng")
    const botonJuego8 = botones[0]

}
document.addEventListener("DOMContentLoaded", (event) => {
    const btnAdd = document.getElementsByClassName("botonIng");
    Array.from(btnAdd).forEach(el => {
        el.addEventListener("click", lobby)
        el.addEventListener("click", tablero);
    });
});

