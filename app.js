// import { fetchGithubRepo } from "./utils/fetchGithubRepo";
// import "./utils/getRepoData";
// import "./utils/renderRepoData";

const toggleBtn = document.querySelector(".burger");
const menuContainer = document.querySelector(".menu-container");
const menu = document.querySelector(".menu");

// helper function to setHeight of elements to enable toggle on form and menu
function setHeight(element, height) {
  element.style.height = `${height}px`;
}

function toggleElement(container, element) {
  console.log(element.style.height);
  let containerHeight = container.getBoundingClientRect().height;
  let elementHeight = element.getBoundingClientRect().height;
  console.log(containerHeight);
  console.log(elementHeight);
  if (containerHeight === 0) {
    setHeight(container, elementHeight);
  } else {
    setHeight(container, 0);
  }
}

// event listener on the burger (or toggleBtn) to toggle upon click by adjusting back to normal height if in minimised state
// This allows toggle on the **Menu**
toggleBtn.addEventListener("click", function () {
  toggleElement(menuContainer, menu);
});
