import './utils/fetchGithubRepo.js';
import './utils/getRepoData.js';
import './utils/renderRepoData.js';
import './utils/renderTags.js';
import './utils/animation.js';
import './utils/squareAnimation.js';
import './utils/slider.js';

const toggleBtn = document.querySelector('.burger');
const menuContainer = document.querySelector('.menu-container');
const menu = document.querySelector('.menu');

// helper function to setHeight of elements to enable toggle on form and menu
function setHeight(element, height) {
  element.style.height = `${height}px`;
}

function toggleElement(container, element) {
  let containerHeight = container.getBoundingClientRect().height;
  let elementHeight = element.getBoundingClientRect().height;
  if (containerHeight === 0) {
    setHeight(container, elementHeight);
  } else {
    setHeight(container, 0);
  }
}

// event listener on the burger (or toggleBtn) to toggle upon click by adjusting back to normal height if in minimised state
// This allows toggle on the **Menu**
toggleBtn.addEventListener('click', function () {
  toggleElement(menuContainer, menu);
});
