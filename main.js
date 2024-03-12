function cambiaColor(color) {
    const square = document.getElementById("square")
    square.className = `square ${color}`
}

function cambiaColorAlSoltar(event) {
    const color = event.target.dataset.color
    cambiaColor(color)
}

const botones = document.querySelectorAll("[data-type=botones]")
for (const button of botones) {
    button.onclick = cambiaColorAlSoltar
}
