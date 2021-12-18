import { renderTags } from "./renderTags.js";

const repoModal = document.querySelector(".repo-modal");
// using string templates render individual job data for modal view upon the primary card h3 click

const tags = `          
<span class="tag is-success ml-1">HTML</span>
<span class="tag is-success">CSS</span>
<span class="tag is-success">JavaScript</span>`;

// to add creation data and completion dates

export function renderRepoData({ title, tags, description, license, commits }) {
  const modalString = `
  <div class="modal-background"></div>
  <div class="card modal-content has-background-white py-5 px-5">
  <header class="card-header">
  <h3 class="card-header-title">${title}</h3>
</header>
<p class="repo-description pt-3">
${description}
</p>
    <div class="card-content">
      <figure class="image is-full-width">
        <img src="https://bulma.io/images/placeholders/128x128.png" />
      </figure>
      <footer class="card-footer">
        <p class="card-footer-item is-flex is-align-items-center">
        <img class="mr-1" src="./images/eye.svg" alt="git-tag" />  
        <span>
            <a href="https://moedaaboul.github.io/${title}/">Preview</a>
          </span>
        </p>
        <p class="card-footer-item">
          <span>
            <a href="https://github.com/moedaaboul/${title}">          <img src="./images/github.svg" alt="git-tag" />Github</a>
          </span>
        </p>
      </footer>
      <div class="license-container is-flex is-align-items-center mb-2 mt-2">
      <img src="./images/tag.svg" alt="git-tag" />
      <p class="ml-2">
     ${renderTags(tags)}
     </p>
      </div>
      <div class="license-container is-flex is-align-items-center mb-2">
  <img src="./images/git-commit.svg" alt="git-commit" />
  <p class="ml-2">${commits} commits</p>
  </div>
  <div class="license-container is-flex is-align-items-center mb-2">
  <img src="./images/award.svg" alt="git-commit" />
  <p class="ml-2">${license}</p>
  </div>
    </div>

  </div>
`;
  repoModal.innerHTML = modalString;
}
