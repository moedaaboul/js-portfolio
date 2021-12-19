export const images = [
  { name: "jobs-finder", path: "jobs-finder.gif" },
  { name: "quiz-app", path: "quiz-app.gif" },
  { name: "password-generator", path: "password-generator.png" },
  { name: "weather-dashboard", path: "weather-dashboard.png" },
  { name: "work-day-scheduler", path: "work-day-scheduler.gif" },
  { name: "flexbox-portfolio", path: "flexbox-portfolio.gif" },
];

export const renderImages = (title) => {
  return images.filter((e) => e.name === title)[0].path;
};
