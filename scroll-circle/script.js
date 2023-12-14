'use strict'
const section = document.querySelector(".scroller");
const list = section.querySelector(".scroller__list");
const progressBar = section.querySelector(".scroller__progress-bar");

const sectionWidth = section.clientWidth;
const listWidth = list.scrollWidth;

let progress = 0, dist = 0;
const step = 50;

const maxDist = listWidth - sectionWidth + step;

progressBar.value = progress;

section.addEventListener("wheel", wheelHandler);

function wheelHandler(evt) {
  evt.preventDefault();

  if (evt.deltaY > 0 &&
    dist <= 0 &&
    listWidth + dist > sectionWidth - step * 2) {
    dist = dist - step;
  } else if (dist < 0) {
    dist = dist + step;
  }

  list.setAttribute("style", `transform: translateX(${dist}px)`);
  progress = ((Math.abs(dist) * 100) / maxDist).toFixed(0);

  progressBar.value = progress;
}
