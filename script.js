const container = document.querySelector('.container');
let gridNumber = 16;



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
drawCanvas();
