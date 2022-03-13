import { fetchGithubRepo } from './fetchGithubRepo.js';
import { renderRepoData } from './renderRepoData.js';
import { renderTags } from './renderTags.js';
import { fetchCommit } from './fetchCommit.js';
import { animateValue } from './counter.js';

const repoModal = document.querySelector('.repo-modal');
const repoList = document.querySelector('.portfolio');
const url = 'https://api.github.com/users/moedaaboul/repos';

// This adds an event listener on h3 headers to fetch repo data

repoList.addEventListener('click', async function (event) {
  try {
    if (event.target.tagName === 'H3') {
      const name = event.target.innerHTML;
      const data = await fetchGithubRepo(url);
      const contributors = await fetchCommit(name);
      console.log(contributors);
      const contributions = contributors
        .filter((e) => e.login === 'moedaaboul')
        .map((e) => e.contributions)[0];
      console.log(contributions);
      const repoRaw = data.filter((obj) => obj.name === name)[0];
      console.log(repoRaw);
      const repo = {
        title: repoRaw.name,
        url: repoRaw.html_url,
        license: repoRaw.license.name,
        tags: repoRaw.topics,
        language: repoRaw.language,
        description: repoRaw.description,
        date: repoRaw.created_at,
        commits: contributions,
      };
      console.log(repo);
      renderRepoData(repo); // after repos data is retrieved from fetch, individual repo info is rendered on screen through a modal
      const obj = document.getElementById('value');
      const commitSvg = document.querySelector('.commit-svg');
      console.log(commitSvg);
      const commits = +obj.getAttribute('data-value');
      commitSvg.classList.add('icn-spinner');
      animateValue(obj, commits * 0.5, commits, 1000);
      repoModal.classList.add('is-active'); // modal status to active to enable the following event listener to exit modal screen on modal-background click

      const modalBg = document.querySelector('.modal-background');
      modalBg.addEventListener('click', function () {
        repoModal.classList.remove('is-active');
      });
    }
  } catch (error) {
    console.error(error);
  }
});
