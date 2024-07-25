const infoAdditional = document.querySelector('.info-company__additional');
const infoButton = document.querySelector('.info-company__button');


infoButton.addEventListener('click', () => {
  if (infoAdditional.classList.contains('visually-hidden')) {
    infoAdditional.classList.remove('visually-hidden');
    infoButton.innerHTML = 'Скрыть';
  } else {
    infoAdditional.classList.add('visually-hidden');
    infoButton.innerHTML = 'Подробнее';
  }
});
