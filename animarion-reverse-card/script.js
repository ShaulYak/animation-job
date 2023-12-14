'use strict'
const items = document.querySelectorAll('.item');

const SPEED = 0.05;

function onCardMove (evt) {
  const box = evt.currentTarget.querySelector('.item-box');

  const a =  - (evt.offsetY - box.offsetHeight / 2) * SPEED;
  const b = (evt.offsetX - box.offsetWidth / 2) * SPEED;

  box.setAttribute('style', `transform: rotateX(${a}deg) rotateY(${b}deg)`);
}

function onCardOut (evt) {
  const box = evt.currentTarget.querySelector('.item-box');
  box.removeAttribute('style');
}

items.forEach((item) => {
  item.addEventListener('mousemove', onCardMove);
  item.addEventListener('mouseout', onCardOut);
});
