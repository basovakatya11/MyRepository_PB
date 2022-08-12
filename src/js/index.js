// Подключение стилей
import '../scss/style.scss';

// Механизм работы .read-more1 (Показать всё/ Скрыть)
var expandButton1 = document.querySelector('.read-more1');
var hiddenImages1 = document.querySelectorAll('.brand-image--hidden');
var buttonText1 = expandButton1.querySelector('.text');

expandButton1.addEventListener('click', function () {
  if (buttonText1.textContent === 'Показать все') {
    for (let i = 0; i < hiddenImages1.length; i++) {
      hiddenImages1[i].classList.remove('brand-image--hidden');
    }
    buttonText1.textContent = 'Скрыть';
  } else {
    for (let i = 0; i < hiddenImages1.length; i++) {
      hiddenImages1[i].classList.add('brand-image--hidden');
    }
    buttonText1.textContent = 'Показать все';
  }
});
 
// Подключение слайда Swiper
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper1 = new Swiper('.image-slider1', {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
      clickable: true
    },
  slidesPerView: 1.25,
});

const swiper2 = new Swiper('.image-slider2', {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
      clickable: true
    },
  slidesPerView: 1.25,
});

// Механизм появления/скрытия меню
var buttonOpen = document.querySelector('.upper-menu__btn-burger');
var buttonClose = document.querySelector('.header__btn-burger');
var menu = document.querySelector('.menu');
var contentBlurred = document.querySelector('.content-blurred')

buttonOpen.addEventListener('click', function () {
  contentBlurred.classList.remove('content-blurred--hidden');
  menu.classList.remove('menu--hidden');
  
});

buttonClose.addEventListener('click', function () {
  menu.classList.add('menu--hidden');
  contentBlurred.classList.add('content-blurred--hidden');
});

contentBlurred.addEventListener('touchstart', function () {
  menu.classList.add('menu--hidden');
  contentBlurred.classList.add('content-blurred--hidden');
});

// Механизм работы .read-more2 (Показать все/ Скрыть)
var expandButton2 = document.querySelector('.read-more2');
var hiddenImages2 = document.querySelectorAll('.tech-type-image--hidden');
var buttonText2 = expandButton2.querySelector('.text');

expandButton2.addEventListener('click', function () {
  if (buttonText2.textContent === 'Показать все') {
    for (let i = 0; i < hiddenImages2.length; i++) {
      hiddenImages2[i].classList.remove('tech-type-image--hidden');
    }
    buttonText2.textContent = 'Скрыть';
  } else {
    for (let i = 0; i < hiddenImages2.length; i++) {
      hiddenImages2[i].classList.add('tech-type-image--hidden');
    }
    buttonText2.textContent = 'Показать все';
  }
});

// Механизм появления/скрытия модалки "Обратная связь"
var buttonMessage = document.querySelector('.upper-menu__btn-chat');
var buttonMessage1 = document.querySelector('.btn-chat');
var modalFeedback = document.querySelector('#modal1');
var buttonCloseModal1 = modalFeedback.querySelector('.modal__btn-close');
var modalOverlay = document.querySelector('.hystmodal__shadow');

buttonMessage.addEventListener('click', function() {
  modalFeedback.classList.remove('hystmodal--hidden');
  modalOverlay.classList.remove('hystmodal__shadow--hidden');
  
});
buttonMessage1.addEventListener('click', function() {
  modalFeedback.classList.remove('hystmodal--hidden');
  modalOverlay.classList.remove('hystmodal__shadow--hidden');
  
});

buttonCloseModal1.addEventListener('click', function () {
  modalFeedback.classList.add('hystmodal--hidden');
  modalOverlay.classList.add('hystmodal__shadow--hidden');
});

//Механизм появления/скрытия модалки "Заказать звонок"
var buttonCall = document.querySelector('.upper-menu__btn-call');
var buttonCall1 = document.querySelector('.btn-call');
var modalCall = document.querySelector('#modal2');
var buttonCloseModal2 = modalCall.querySelector('.modal__btn-close');

buttonCall.addEventListener('click', function() {
  modalCall.classList.remove('hystmodal--hidden');
  modalOverlay.classList.remove('hystmodal__shadow--hidden');
  
});
buttonCall1.addEventListener('click', function() {
  modalCall.classList.remove('hystmodal--hidden');
  modalOverlay.classList.remove('hystmodal__shadow--hidden');
  
});

buttonCloseModal2.addEventListener('click', function () {
  modalCall.classList.add('hystmodal--hidden');
  modalOverlay.classList.add('hystmodal__shadow--hidden');
});


