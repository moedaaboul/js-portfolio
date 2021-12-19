let title = "jobs-finder";

export const parseTitle = (str) => {
  return str.toUpperCase().split("-").join(" ");
};

console.log(parseTitle(title));
