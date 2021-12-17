// fetches Github data from the Github API by providing url as input and returns data
export async function fetchGithubRepo(URL) {
  try {
    const response = await fetch(URL);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
