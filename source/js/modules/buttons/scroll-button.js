const scrollButton = document.querySelector('.smart-main-block__button');
const feedbackContainer = document.querySelector('.smart-feedback__container');

function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth',
  });
}

scrollButton.addEventListener('click', () => {
  scrollTo(feedbackContainer);
});
