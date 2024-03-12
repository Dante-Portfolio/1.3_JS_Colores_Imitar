function cambiaColor(color1, color2) {
    const square = document.getElementById("square")
    square.classList.remove(color1)
    square.classList.add(color2)
}

function colorAzul(event) {
    const button = event.target
    const primerColor = button.attributes.primerColor.value
    const segundoColor = button.attributes.segundoColor.value
    cambiaColor(primerColor, segundoColor)
}

function colorRojo(event) {
    const button = event.target
    const primerColor = button.attributes.primerColor.value
    const segundoColor = button.attributes.segundoColor.value
    cambiaColor(primerColor, segundoColor)
}

const botonRojo = document.getElementById('botonRojo')
botonRojo.onclick = colorRojo

const botonAzul = document.getElementById('botonAzul')
botonAzul.onclick = colorAzul
