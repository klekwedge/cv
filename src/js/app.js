"use strict";
import isWebp from './modules/webp.js'
import burgerMenu from './modules/burger-menu.js'
import scrollAnimation from './modules/scroll-animation.js'
import typeIt from './modules/typeIt.js'


window.addEventListener("DOMContentLoaded", () => {
  isWebp();
  typeIt();
  burgerMenu();
  scrollAnimation();
});
