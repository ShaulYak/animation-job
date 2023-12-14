'use strict'
const colorStep = 2;
let colorResultHSL = 53;
let currentScroll = 0;

function scrolling() {
  let scrollTop = window.scrollY;
  const delta = scrollTop - currentScroll;

  if (delta > 0) {
    colorResultHSL = colorResultHSL + colorStep;
    if (colorResultHSL >=360) {
      colorResultHSL = 0;
    }
  } else {
      if (scrollTop === 0) {
        colorResultHSL = 53
      } else {
        colorResultHSL = colorResultHSL - colorStep;
      }

    if (colorResultHSL <= 0) {
      colorResultHSL = 360;
    }
  }

  document.body.setAttribute('style', `background-color: hsl(${colorResultHSL}deg 98% 65%);`);
  currentScroll = scrollTop;
}

window.addEventListener("scroll", scrolling);
