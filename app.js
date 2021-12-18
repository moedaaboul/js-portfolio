import "./utils/fetchGithubRepo.js";
import "./utils/getRepoData.js";
import "./utils/renderRepoData.js";
import "./utils/renderTags.js";

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

// export async function fetchGithubRepo(URL) {
//   try {
//     const response = await fetch(URL);
//     return await response.json();
//   } catch (error) {
//     console.error(error);
//   }
// }

// window.addEventListener("DOMContentLoaded", async () => {
//   let data = await fetchGithubRepo(
//     "https://api.github.com/users/moedaaboul/repos"
//   );
//   console.log(data);
//   const repoRaw = data.filter((obj) => obj.name === "jobs-finder")[0];
//   console.log(repoRaw);
//   const repo = {
//     url: repoRaw.html_url,
//     license: repoRaw.license,
//     topics: repoRaw.topics,
//     language: repoRaw.language,
//     description: repoRaw.description,
//     data: repoRaw.created_at,
//   };
//   console.log(repo);
// });
