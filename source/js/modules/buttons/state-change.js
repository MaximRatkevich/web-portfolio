const copyrightList = document.querySelector('.copyright__list');
const copyrightButton = document.querySelector('.copyright__button');
const copyrightIcon = document.querySelector('.copyright__button-icon');
const sectionsSiteList = document.querySelector('.sections-site__list');
const sectionsSiteButton = document.querySelector('.sections-site__button');
const sectionsSiteIcon = document.querySelector('.sections-site__button-icon');

copyrightButton.addEventListener('click', () => {
  if (copyrightList.classList.contains('copyright__list--closed')) {
    copyrightList.classList.remove('copyright__list--closed');
    copyrightList.classList.add('copyright__list--open');
    copyrightIcon.classList.remove('copyright__button-icon--plus');
    copyrightIcon.classList.add('copyright__button-icon--minus');
    sectionsSiteList.classList.add('sections-site__list--closed');
    sectionsSiteList.classList.remove('sections-site__list--open');
    sectionsSiteIcon.classList.add('sections-site__button-icon--plus');
    sectionsSiteIcon.classList.remove('sections-site__button-icon--minus');
  } else {
    copyrightList.classList.add('copyright__list--closed');
    copyrightList.classList.remove('copyright__list--open');
    copyrightIcon.classList.add('copyright__button-icon--plus');
    copyrightIcon.classList.remove('copyright__button-icon--minus');
  }
});

sectionsSiteButton.addEventListener('click', () => {
  if (sectionsSiteList.classList.contains('sections-site__list--closed')) {
    sectionsSiteList.classList.remove('sections-site__list--closed');
    sectionsSiteList.classList.add('sections-site__list--open');
    sectionsSiteIcon.classList.remove('sections-site__button-icon--plus');
    sectionsSiteIcon.classList.add('sections-site__button-icon--minus');
    copyrightList.classList.add('copyright__list--closed');
    copyrightList.classList.remove('copyright__list--open');
    copyrightIcon.classList.add('copyright__button-icon--plus');
    copyrightIcon.classList.remove('copyright__button-icon--minus');
  } else {
    sectionsSiteList.classList.add('sections-site__list--closed');
    sectionsSiteList.classList.remove('sections-site__list--open');
    sectionsSiteIcon.classList.add('sections-site__button-icon--plus');
    sectionsSiteIcon.classList.remove('sections-site__button-icon--minus');
  }
});
