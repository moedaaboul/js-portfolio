const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const subtitle = entry.target.querySelector('.sub-title');

    if (entry.isIntersecting) {
      subtitle.classList.add('is-slider-up');
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    subtitle.classList.remove('is-slider-up');
  });
});

observer.observe(document.querySelector('.sub-title-wrapper'));
