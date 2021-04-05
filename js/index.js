import { colors } from './colors.js';

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

refs.start.addEventListener('click', changeColorBody);
refs.stop.addEventListener('click', stopChangeColorBody);

let colorId = null;

function changeColorBody() {
  refs.start.setAttribute('disabled', true);

  colorId = setInterval(() => {
    let randomColor = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[randomColor];
  }, 1000);
  // console.log(colorId);
}

function stopChangeColorBody() {
  refs.start.removeAttribute('disabled');
  clearInterval(colorId);
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
