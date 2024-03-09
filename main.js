function cambiaColor() {
    const square = document.getElementById('square')
    square.classList.remove('red')
    square.classList.add('blue')
}

const boton = document.getElementById('boton')
boton.onclick = changeColor
