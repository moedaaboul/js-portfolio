let str = "2021-11-29T10:00:50Z";

export const parseDate = (str) => {
  const date = str
    .split("")
    .filter((e, i) => i < 10)
    .join("");
  return date;
};

console.log(parseDate(str));
