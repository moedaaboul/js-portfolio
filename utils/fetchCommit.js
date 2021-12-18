export async function fetchCommit(repo) {
  const url = `https://api.github.com/repos/moedaaboul/${repo}/contributors`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
