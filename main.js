function cambiaColor(event) {
    const button = event.target
    const nuevoColor = button.dataset.color
    const square = document.getElementById("square")
    square.className = `square ${nuevoColor}`
}

const botones = document.querySelectorAll("[data-type=botones]")
for (const button of botones) {
    button.onclick = cambiaColor
}
