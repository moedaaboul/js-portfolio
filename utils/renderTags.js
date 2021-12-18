export const renderTags = (arr) => {
  arr
    .map((element) => `<span class="tag is-success">${element}</span>`)
    .join(",");
};
