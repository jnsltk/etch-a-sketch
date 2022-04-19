const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
let gridNumber = 16;

btn.addEventListener('click', resetCanvas)

function drawCanvas() {
    container.setAttribute('style', `grid-template-columns: repeat(${gridNumber}, 1fr); 
        grid-template-rows: repeat(${gridNumber}, 1fr);`);

    for (let i = 0; i < gridNumber * gridNumber; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseenter', changeColor)
        container.appendChild(pixel);
    }
}
function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}
function resetCanvas() {
    gridNumber = parseInt(prompt('Please enter a number between 1 and 100 for the number of squares per side for the new grid', '16'));
    if (gridNumber > 100 || gridNumber < 0) {
        alert('Please input a valid number and try again!');
        return;
    }
    container.innerHTML = '';
    drawCanvas();
}
drawCanvas();
