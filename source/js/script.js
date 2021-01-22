'use strict';

const galleryItems = document.querySelectorAll('.gallery__item');
const modal = document.querySelector('.modal');
const modalWrapper = modal.querySelector('.modal__wrapper');
const buttonCloseModal = modal.querySelector('.modal__button');
const textNumber = modal.querySelector('.modal__number');

const showCurrentSlide = function (item, id) {
  item.addEventListener('click', function () {
    const image = item.querySelector('.gallery__image').cloneNode(false);
    const imageOld = modalWrapper.querySelector('.modal__image');

    if (imageOld) {
      imageOld.remove();
    }

    image.setAttribute('class', 'modal__image');
    textNumber.textContent = id + 1;
    modalWrapper.append(image);

    openModal();
  });
};

for (let counter = 0; counter < galleryItems.length; counter++) {
  showCurrentSlide(galleryItems[counter], counter);
}

const closeModal = function () {
  document.body.classList.remove('modal-show');
  modal.classList.remove('modal--show');
};

const openModal = function () {
  document.body.classList.add('modal-show');
  modal.classList.add('modal--show');
};

buttonCloseModal.addEventListener('click', function (evt) {
  evt.preventDefault();
  closeModal();
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {

    if (modal.classList.contains('modal--show')) {
      evt.preventDefault();
      closeModal();
    }

  }
});
