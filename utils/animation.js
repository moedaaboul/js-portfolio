// scroll intersection observer for sub-title
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const subtitle = entry.target.querySelector('.sub-title');

    if (entry.isIntersecting) {
      subtitle.classList.add('is-slider-up');
      return;
    }

    // When not intersecting, remove the class!
    subtitle.classList.remove('is-slider-up');
  });
});

observer.observe(document.querySelector('.sub-title-wrapper'));
