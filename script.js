const container = document.querySelector('.container');
let gridNumber = 16;

container.setAttribute('style', `grid-template-columns: repeat(${gridNumber}, 1fr); grid-template-rows: repeat(${gridNumber}, 1fr);`)

for (let i = 0; i < gridNumber * gridNumber; i++) {
    drawCanvas();
}

function drawCanvas() {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    container.appendChild(pixel);
}