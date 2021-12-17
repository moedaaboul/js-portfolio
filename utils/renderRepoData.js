const repoModal = document.querySelector(".repo-modal");
// using string templates render individual job data for modal view upon the primary card h3 click

const tags = `          
<span class="tag is-success ml-1">HTML</span>
<span class="tag is-success">CSS</span>
<span class="tag is-success">JavaScript</span>`;

// to add creation data and completion dates

export function renderRepoData({ title, tags, description }) {
  const modalString = `
  <div class="modal-background"></div>
  <div class="card modal-content has-background-white py-5 px-5">
    <header class="card-header">
      <p class="card-header-title">
        <span>${title}</span>
        <span class="is-pulled-right">${tags}</span>
      </p>
    </header>
    <p class="repo-description m-2">
      ${description}
    </p>
    <div class="card-content">
      <figure class="image is-full-width">
        <img src="https://bulma.io/images/placeholders/128x128.png" />
      </figure>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            <a href="https://moedaaboul.github.io/${title}/">Preview</a>
          </span>
        </p>
        <p class="card-footer-item">
          <span>
            View on
            <a href="https://github.com/moedaaboul/${title}">Github</a>
          </span>
        </p>
      </footer>
    </div>
  </div>
`;
  repoModal.innerHTML = modalString;
}
