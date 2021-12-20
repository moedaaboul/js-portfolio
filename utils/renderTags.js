export const renderTags = (arr) => {
  const tagsString = arr
    .map((element) => `<span class="tag is-success ml-1">${element}</span>`)
    .join("");
  return tagsString;
};
