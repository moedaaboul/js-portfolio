const reposlideshowContainer = document.querySelector('.repo-slideshow');

export function renderRepoSlideshow(element) {
  // querySelector - it returns the element within the document that matches the specified selector
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = element.getElementsByClassName('mySlides');
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
}
