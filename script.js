/* eslint-disable no-plusplus */
const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
const mode = document.querySelector('#color');
// Set inital size of the grid
let gridNumber = 16;

function randomColor() {
  function random() {
    return Math.floor(Math.random() * 255) + 1;
  }
  const r = random();
  const g = random();
  const b = random();
  return [r, g, b];
}
function getRgb(string) {
  return parseInt(string.slice(4, 7), 10);
}
function gradualBlack(e) {
  const gradVal = 25.5;
  const currentColor = e.target.style.backgroundColor;
  // If the pixel has no color, give the first 10% of black, after that increase by 10%
  if (!currentColor) {
    // Return initial value of 10% black
    const c = gradVal * 9;
    return [c, c, c];
  }
  // If value is already black, return black
  if (!getRgb(currentColor)) return [0, 0, 0];
  // Add 10% of black, taking the values that end with .5 into consideration
  const c = (getRgb(currentColor) - gradVal) - (getRgb(currentColor) % gradVal);
  return [c, c, c];
}
function changeColor(e) {
  if (mode.value === 'black') {
    e.target.style.backgroundColor = 'black';
  } else if (mode.value === 'color' && !e.target.style.backgroundColor) {
    e.target.style.backgroundColor = `rgb(${randomColor()}`;
  } else if (mode.value === 'gradual') {
    e.target.style.backgroundColor = `rgb(${gradualBlack(e)}`;
  }
}
function drawCanvas() {
  container.setAttribute('style', `grid-template-columns: repeat(${gridNumber}, 1fr); 
        grid-template-rows: repeat(${gridNumber}, 1fr);`);

  for (let i = 0; i < gridNumber * gridNumber; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.addEventListener('mouseenter', changeColor);
    container.appendChild(pixel);
  }
}
function resetCanvas() {
  gridNumber = parseInt(prompt('Please enter a number between 1 and 100 for the number of squares per side for the new grid', '16'), 10);
  if (gridNumber > 100 || gridNumber < 0) {
    alert('Please input a valid number and try again!');
    return;
  }
  container.innerHTML = '';
  drawCanvas();
}

btn.addEventListener('click', resetCanvas);
drawCanvas();
