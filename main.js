function cambiaColor(event) {
    const button = event.target
    const primerColor = button.attributes.primerColor.value
    const segundoColor = button.attributes.segundoColor.value

    const square = document.getElementById("square")
    square.classList.replace(primerColor, segundoColor)
}

const botonRojo = document.getElementById('botonRojo')
botonRojo.onclick = cambiaColor

const botonAzul = document.getElementById('botonAzul')
botonAzul.onclick = cambiaColor
