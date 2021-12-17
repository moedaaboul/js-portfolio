import { fetchGithubRepo } from "./fetchGithubRepo.js";
import { renderRepoData } from "./renderRepoData.js";

const repoModal = document.querySelector(".repo-modal");
console.log(repoModal);
const repoList = document.querySelector(".portfolio");
console.log(repoList);
const url = "https://api.github.com/users/moedaaboul/repos";

// This adds an event listener on h3 headers to fetch repo data

repoList.addEventListener("click", async function (event) {
  try {
    console.log(event.target);
    console.log(event.target.textContent);
    if (event.target.tagName === "H3") {
      console.log("babab");
      const name = event.target.textContent;
      console.log(name);
      const data = await fetchGithubRepo(url);
      const repoRaw = data.filter((obj) => obj.name === name)[0];
      const repo = {
        title: repoRaw.name,
        url: repoRaw.html_url,
        license: repoRaw.license,
        tags: repoRaw.topics,
        language: repoRaw.language,
        description: repoRaw.description,
        data: repoRaw.created_at,
      };
      renderRepoData(repo); // after repos data is retrieved from fetch, individual repo info is rendered on screen through a modal
      repoModal.classList.add("is-active"); // modal status to active to enable the following event listener to exit modal screen on modal-background click

      const modalBg = document.querySelector(".modal-background");
      modalBg.addEventListener("click", function () {
        repoModal.classList.remove("is-active");
      });
    }
  } catch (error) {
    console.error(error);
  }
});

// repoList.addEventListener("click", async function (event) {
//   try {
//     if (event.target.tagName === "H3") {
//       console.log("babab");
//       const name = event.target.value;
//       console.log(name);
//       const data = await fetchGithubRepo(url);
//       const repoRaw = data.filter((obj) => obj.name === name)[0];
//       const repo = {
//         url: repoRaw.html_url,
//         license: repoRaw.license,
//         topics: repoRaw.topics,
//         language: repoRaw.language,
//         description: repoRaw.description,
//         data: repoRaw.created_at,
//       };
//       renderRepoData(job); // after repos data is retrieved from fetch, individual repo info is rendered on screen through a modal
//       repoModal.classList.add("is-active"); // modal status to active to enable the following event listener to exit modal screen on modal-background click

//       const modalBg = document.querySelector(".modal-background");
//       modalBg.addEventListener("click", function () {
//         repoModal.classList.remove("is-active");
//       });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// });
