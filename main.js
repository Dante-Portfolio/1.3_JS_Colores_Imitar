function cambiaColor(color1, color2) {
    const square = document.getElementById("square")
    square.classList.remove(color1)
    square.classList.add(color2)
}

function colorAzul() {
    cambiaColor("red", "blue")
    console.log("azul")
}

function colorRojo() {
    cambiaColor("blue", "red")
    console.log("rojo")
}

const botonRojo = document.getElementById('botonRojo')
botonRojo.onclick = colorAzul

const botonAzul = document.getElementById('botonAzul')
botonAzul.onclick = colorRojo
