import { fetchGithubRepo } from "./fetchGithubRepo.js";
import { renderIndividualRepoData } from "./renderRepoData.js";

const repoModal = document.querySelector(".repo-modal");
const repoList = document.querySelectorAll(".cards");

const url = "https://api.github.com/users/moedaaboul/repos";

// This adds an event listener on h3 headers to fetch repo data
repoList.addEventListener("click", async function (event) {
  try {
    if (event.target.tagName === "H3") {
      const name = event.target.dataset.id;
      const data = await fetchGithubRepo(url);
      const repoRaw = data.filter((obj) => obj.name === name);
      const repo = {
        url: repoRaw.html_url,
        license: repoRaw.license,
        topics: repoRaw.topics,
        language: repoRaw.language,
        description: repoRaw.description,
        data: repoRaw.created_at,
      };
      renderRepoData(job); // after repos data is retrieved from fetch, individual repo info is rendered on screen through a modal
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
