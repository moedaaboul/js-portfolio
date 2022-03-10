import { renderTags } from './renderTags.js';
import { parseDate } from './parseDate.js';
import { parseTitle } from './parseTitle.js';
import { renderImages, images } from './images.js';
import { renderURL } from './deployments.js';

const repoModal = document.querySelector('.repo-modal');
// using string templates render individual job data for modal view upon the primary card h3 click

// to add creation data and completion dates

export function renderRepoData({
  title,
  tags,
  description,
  license,
  commits,
  date,
}) {
  const modalString = `
  <div class="modal-background"></div>
  <div class="card modal-content has-background-white py-5 px-5">
  <header class="card-header hero has-background-dark">
  <h2 class="card-header-title has-text-success">${parseTitle(title)}</h2>
</header>
<div class="creation-date-container is-flex is-align-items-center mb-2 pt-3">
<img class="mr-1" src="./images/calendar.svg" alt="git-tag" />
<p class="ml-2">Creation date: ${parseDate(date)}</p>
</div>
<p class="repo-description">
${description}
</p>
    <div class="card-content">
      <figure class="image image is-3by2">
        <img src="./images/${renderImages(title)}" />
      </figure>
      <footer class="card-footer">
        <p class="card-footer-item is-flex is-align-items-center">
        <img class="mr-1" src="./images/eye.svg" alt="git-tag" />  
        <span>
            <a href="${renderURL(title)}/">Preview</a>
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
