document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.querySelector('.portfolio__button--prev');
  const nextButton = document.querySelector('.portfolio__button--next');
  const items = document.querySelectorAll('.portfolio__item');
  let currentIndex = Array.from(items).findIndex((item) => item.classList.contains('portfolio__item--active'));

  // Проверка, чтобы currentIndex не был -1
  if (currentIndex === -1) {
    currentIndex = 0; // или какой-либо другой индекс по умолчанию
    items[currentIndex].classList.add('portfolio__item--active');
  }

  function showSlide(index) {
    // Проверка границ индекса
    if (items[currentIndex]) {
      items[currentIndex].classList.remove('portfolio__item--active');
    }

    currentIndex = (index + items.length) % items.length;
    if (items[currentIndex]) {
      items[currentIndex].classList.add('portfolio__item--active');
    }
  }

  prevButton.addEventListener('click', function () {
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', function () {
    showSlide(currentIndex + 1);
  });
});
