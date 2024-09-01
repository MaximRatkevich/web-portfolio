const smartCopyrightList = document.querySelector('.smart-copyright__list');
const smartCopyrightButton = document.querySelector('.smart-copyright__button');
const smartCopyrightIcon = document.querySelector('.smart-copyright__button-icon');
const smartSectionsSiteList = document.querySelector('.smart-sections-site__list');
const smartSectionsSiteButton = document.querySelector('.smart-sections-site__button');
const smartSectionsSiteIcon = document.querySelector('.smart-sections-site__button-icon');

smartCopyrightButton.addEventListener('click', () => {
  if (smartCopyrightList.classList.contains('smart-copyright__list--closed')) {
    smartCopyrightList.classList.remove('smart-copyright__list--closed');
    smartCopyrightList.classList.add('smart-copyright__list--open');
    smartCopyrightIcon.classList.remove('smart-copyright__button-icon--plus');
    smartCopyrightIcon.classList.add('smart-copyright__button-icon--minus');
  } else {
    smartCopyrightList.classList.add('smart-copyright__list--closed');
    smartCopyrightList.classList.remove('smart-copyright__list--open');
    smartCopyrightIcon.classList.add('smart-copyright__button-icon--plus');
    smartCopyrightIcon.classList.remove('smart-copyright__button-icon--minus');
  }
});

smartSectionsSiteButton.addEventListener('click', () => {
  if (smartSectionsSiteList.classList.contains('smart-sections-site__list--closed')) {
    smartSectionsSiteList.classList.remove('smart-sections-site__list--closed');
    smartSectionsSiteList.classList.add('smart-sections-site__list--open');
    smartSectionsSiteIcon.classList.remove('smart-sections-site__button-icon--plus');
    smartSectionsSiteIcon.classList.add('smart-sections-site__button-icon--minus');
  } else {
    smartSectionsSiteList.classList.add('smart-sections-site__list--closed');
    smartSectionsSiteList.classList.remove('smart-sections-site__list--open');
    smartSectionsSiteIcon.classList.add('smart-sections-site__button-icon--plus');
    smartSectionsSiteIcon.classList.remove('smart-sections-site__button-icon--minus');
  }
});
