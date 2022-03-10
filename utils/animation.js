const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector('.sub-title');

    if (entry.isIntersecting) {
      square.classList.add('is-slider-up');
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('is-slider-up');
  });
});

observer.observe(document.querySelector('.sub-title-wrapper'));
