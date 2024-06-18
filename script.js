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

function desplegarjuego8(e){
    const contenedor = document.getElementById("caja2")
    const nuevosElementos = creadorDeElementos(8)
    agregadorDeElementosAlHtml(nuevosElementos, contenedor)
}

function desplegarjuego16(e){
    const contenedor = document.getElementById("caja2")
    const nuevosElementos = creadorDeElementos(16)
    agregadorDeElementosAlHtml(nuevosElementos, contenedor)
}

function desplegarjuego32(e){
    const contenedor = document.getElementById("caja2")
    const nuevosElementos = creadorDeElementos(32)
    agregadorDeElementosAlHtml(nuevosElementos, contenedor)
}

function creadorDeElementos(NumeroDeElementos){
    const elementos = []
    for(let i = 0; i < NumeroDeElementos; i++){
        const elemento = document.createElement("p")
        elemento.className = "cartas"
        elemento.textContent = `${i}`
        elementos.push(elemento)
    }
    return elementos
}

function agregadorDeElementosAlHtml(elementos, contenedor){
    elementos.forEach((elemento) => contenedor.appendChild(elemento))
}


document.addEventListener("DOMContentLoaded", (event) => {
    const btnAdd = document.getElementsByClassName("botonIng");
    const boton8 = btnAdd[0]
    const boton16 = btnAdd[1]
    const boton32 = btnAdd[2]

    Array.from(btnAdd).forEach(el => {
        el.addEventListener("click", lobby)
        el.addEventListener("click", tablero)
    });
    boton8.addEventListener("click",desplegarjuego8)
    boton16.addEventListener("click",desplegarjuego16)
    boton32.addEventListener("click",desplegarjuego32)
});

