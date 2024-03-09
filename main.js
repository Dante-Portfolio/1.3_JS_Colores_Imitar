function cambiaColorRojo() {
    const square = document.getElementById('square')
    square.classList.remove('blue')
    square.classList.add('red')
}

function cambiaColorAzul() {
    const square = document.getElementById('square')
    square.classList.remove('red')
    square.classList.add('blue')
}

const botonRojo = document.getElementById('botonRojo')
botonRojo.onclick = cambiaColorAzul

const botonAzul = document.getElementById('botonAzul')
botonAzul.onclick = cambiaColorRojo
