"use strict";
import burgerMenu from './modules/burger-menu.js'
import scrollAnimation from './modules/scroll-animation.js'
import typeIt from './modules/typeIt.js'

window.addEventListener("DOMContentLoaded", () => {
  typeIt();
  burgerMenu();
  scrollAnimation();
});
