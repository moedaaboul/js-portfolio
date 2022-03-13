const squareWrappers = document.querySelectorAll('.square-wrapper');

// scroll intersection observer for square
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector('.square');

    // square animation added
    if (entry.isIntersecting) {
      square.classList.add('square-animation');
      return;
    }

    // When not intersecting
    square.classList.remove('square-animation');
  });
});

observer.observe(document.querySelector('.square-wrapper'));

document.addEventListener('DOMContentLoaded', function () {
  Array.from(squareWrappers).forEach(function (element) {
    observer.observe(element);
  });
});
