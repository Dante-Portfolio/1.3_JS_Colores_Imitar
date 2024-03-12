function cambiaColor(event) {
    const button = event.target
    const nuevoColor = button.attributes.color.value
    const square = document.getElementById("square")
    square.className = `square ${nuevoColor}`
}

const botonRojo = document.getElementById('botonRojo')
botonRojo.onclick = cambiaColor

const botonAzul = document.getElementById('botonAzul')
botonAzul.onclick = cambiaColor
