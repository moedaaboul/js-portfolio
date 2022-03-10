export const deployments = [
  { name: 'tech-blog', path: 'https://mdaaboul-tech-blog.herokuapp.com/' },
  { name: 'legogram', path: 'https://legogram.herokuapp.com/' },
  {
    name: 'jobs-finder',
    path: 'https://moedaaboul.github.io/jobs-finder/',
  },
  { name: 'quiz-app', path: 'https://moedaaboul.github.io/quiz-app/' },
  {
    name: 'password-generator',
    path: 'https://moedaaboul.github.io/password-generator',
  },
  {
    name: 'weather-dashboard',
    path: 'https://moedaaboul.github.io/weather-dashboard/',
  },
  {
    name: 'work-day-scheduler',
    path: 'https://moedaaboul.github.io/work-day-scheduler/',
  },
  {
    name: 'flexbox-portfolio',
    path: 'https://moedaaboul.github.io/flexbox-portfolio',
  },
  {
    name: 'team-profile-generator',
    path: 'https://drive.google.com/file/d/1KAaGDYgHObkcrLzAKw4rKIMEY04-3JRm/view',
  },
  {
    name: 'employee-tracker',
    path: 'https://drive.google.com/file/d/1RoJ_t8hFmkak7h2BDBvQsZf7Kkvo2wDw/view',
  },
];

export const renderURL = (title) => {
  return deployments.filter((e) => e.name === title)[0].path;
};
