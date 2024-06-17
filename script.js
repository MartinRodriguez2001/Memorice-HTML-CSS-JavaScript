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
    botonJuego8.addEventListener("click", desplegarjuego8)
}

function desplegarjuego8(e){
    const contenedor = document.getElementById("caja2")
    const nuevosElementos = creadorDeElementos(8)
    agregadorDeElementosAlHtml(nuevosElementos, contenedor)
}

function creadorDeElementos(NumeroDeElementos){
    const elementos = []
    for(let i = 0; i < NumeroDeElementos; i++){
        const elemento = document.createElement("p")
        elemento.className = "cartas"
        elemento.textContent = `elemento ${i+1}`
        elementos.push(elemento)
    }
    return elementos
}

function agregadorDeElementosAlHtml(elementos, contenedor){
    elementos.forEach((elemento) => contenedor.appendChild(elemento))
}


document.addEventListener("DOMContentLoaded", (event) => {
    const btnAdd = document.getElementsByClassName("botonIng");
    Array.from(btnAdd).forEach(el => {
        el.addEventListener("click", lobby)
        el.addEventListener("click", tablero)
        el.addEventListener("click", desplegarjuego8);
    });
});

