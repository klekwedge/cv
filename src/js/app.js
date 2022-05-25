import burger from './modules/burger.js';
import scrollAnimation from './modules/scroll-animation.js';
import isWebp from './modules/webp.js';
import typeIt from './modules/typeit.js';

window.addEventListener('DOMContentLoaded', () => {
  isWebp();
  burger();
  typeIt();
  scrollAnimation();
});
