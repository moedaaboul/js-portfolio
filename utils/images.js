export const images = [
  { name: 'tech-blog', path: 'tech-blog.png' },
  { name: 'legogram', path: 'legogram.png' },
  { name: 'jobs-finder', path: 'jobs-finder.gif' },
  { name: 'quiz-app', path: 'Quiz-App.gif' },
  { name: 'password-generator', path: 'Password-Generator.png' },
  { name: 'weather-dashboard', path: 'weather-dashboard.png' },
  { name: 'work-day-scheduler', path: 'Work-Day-Scheduler.gif' },
  { name: 'flexbox-portfolio', path: 'flexbox-portfolio.gif' },
];

export const renderImages = (title) => {
  return images.filter((e) => e.name === title)[0].path;
};
