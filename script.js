const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
const mode = document.querySelector('#color');
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
    //console.log(e.target.style.backgroundColor);
    if (e.target.style.backgroundColor) return;
    if (mode.value === 'color') {
        e.target.style.backgroundColor = `rgb(${randomColor()}`;
    } else {
        e.target.style.backgroundColor = 'black';
    }
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
function randomColor() {
    function random() {
        return Math.floor(Math.random() * 255) + 1;
    }
    let r = random();
    let g = random();
    let b = random();
    return [r, g, b];
}
drawCanvas();
