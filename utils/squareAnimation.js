const squareWrappers = document.querySelectorAll('.square-wrapper');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector('.square');

    if (entry.isIntersecting) {
      square.classList.add('square-animation');
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('square-animation');
  });
});

observer.observe(document.querySelector('.square-wrapper'));

document.addEventListener('DOMContentLoaded', function () {
  // querySelector - it returns the element within the document that matches the specified selector
  Array.from(squareWrappers).forEach(function (element) {
    observer.observe(element);
  });
});
