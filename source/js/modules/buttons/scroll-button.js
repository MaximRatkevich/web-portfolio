const scrollButton = document.querySelector('.main-block__button');
const feedbackContainer = document.querySelector('.feedback__container');

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
