
//Бургер
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__content-top');
let menuLinks = menu.querySelectorAll('nav__link');

burger.addEventListener('click',

  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__content-top--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__content-top--active');

    document.body.classList.remove('stop-scroll')
  })
})

//Раскрытие поиска
let BtnSearch = document.querySelector('.header__form-btn');
let form = document.querySelector('.header__form');
let Btncancel = document.querySelector('.header__form-btn-cancel');

BtnSearch.addEventListener('click',

  function () {
    form.classList.add('header__form--active');
  })

Btncancel.addEventListener('click',

  function () {
    form.classList.remove('header__form--active');
  })



// Открытие выпадающего меню
const buttonDrop = document.querySelectorAll('.header__btn-search');
buttonDrop.forEach(function (btn) {
  btn.addEventListener('click', function (ev) {
    if (ev.target.classList.contains('activ')) {
      ev.currentTarget.classList.remove('activ');
      ev.currentTarget.classList.add('focus');

    } else {
      buttonDrop.forEach(function (btnDrop) {
        btnDrop.classList.remove('activ')
        btnDrop.classList.remove('focus')
        ev.target.classList.add('activ')
      })
    }
  })
})
document.addEventListener('click', function (missClick) {
  if (!missClick.target.classList.contains('header__btn-search') && !missClick.target.classList.contains('header__item-content')) {
    buttonDrop.forEach(function (ev) {
      ev.classList.remove('activ')
      ev.classList.remove('focus')
    })
  }
})

// Селект
const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom'
});

//Свайпер в галлереи
const swiper = new Swiper('.swiper-gallery', {
  speed: 400,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 25,
  loop: false,
  pagination: {
    el: '.swiper-pagination-gallery',
    type: 'fraction',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  navigation: {
    nextEl: '.swiper-button-next-gallery',
    prevEl: '.swiper-button-prev-gallery',
  },

  breakpoints: {
    576: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 28,
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 38,
    },
    1024: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34,
    },
    1200: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1600: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 40,
    }
  }
});

// Появление модального окна в секции галерея
let galleryBtn = document.querySelectorAll('.gallery__btn-slide');
let galleryMBtn = document.querySelectorAll('.gallery__modal-btn');
let galleryM = document.querySelectorAll('.gallery__modal');

galleryBtn.forEach(function (imgBtn) {
  imgBtn.addEventListener('click', function (imgBtnEvents) {
    const path3 = imgBtnEvents.currentTarget.dataset.path
    document.querySelector(`[data-target="${path3}"]`).classList.add('gallery__modal--active')
    document.body.classList.add('stop-scroll')
    document.addEventListener('click', function (missDrop) {
      if (missDrop.target.classList.contains('gallery__modal--active')) {
        document.querySelector(`[data-target="${path3}"]`).classList.remove('gallery__modal--active')
        document.body.classList.remove('stop-scroll')
      }
    })
    galleryMBtn.forEach(function (gmBtn) {
      gmBtn.addEventListener('click', function () {
        galleryM.forEach(function (gm) {
          gm.classList.remove('gallery__modal--active')
          document.body.classList.remove('stop-scroll')
        })
      })
    })
  })
})

//Аккордион
new Accordion('.accordion');


//Таб
let tabsBtn = document.querySelectorAll('.ac-panel__btn');
let tabsItem = document.querySelectorAll('.catalog__item-left');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('ac-panel__btn--active') });
    e.currentTarget.classList.add('ac-panel__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('catalog__item-left--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__item-left--active');
  });
});

// мобильный скрол в каталоге
tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (clickelement) {
    if (window.innerWidth <= 768) {
      const path5 = clickelement.currentTarget.dataset.path
      document.querySelector(`[data-target="${path5}"]`).scrollIntoView(true)
    }
  })
})

//Свайпер в события
const swiper1 = new Swiper('.swiper-events', {
  speed: 400,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 25,
  loop: false,
  pagination: {
    el: '.swiper-pagination-events',
    type: 'bullets',
    clickable: true,
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  navigation: {
    nextEl: '.swiper-button-next-events',
    prevEl: '.swiper-button-prev-events',
  },

  breakpoints: {
    576: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 25,

    },
    1200: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});


//Тултип
tippy('#myButton1', {
  content: 'Разновидность информационного воздействия, в&nbsp;котором осуществляется преднамеренное воздействие на&nbsp;объект с&nbsp;целью оказания влияния на&nbsp;его ориентацию, намерения и&nbsp;действия.',
  allowHTML: true,
  theme: 'grey',

});

tippy('#myButton2', {
  content: 'Набор требований и&nbsp;правил, направленных на&nbsp;определение того, какие информационные потоки в&nbsp;системе являются разрешёнными, а&nbsp;какие нет.',
  allowHTML: true,
  theme: 'grey',
});

tippy('#myButton3', {
  content: 'В&nbsp;российской научной и&nbsp;учебной литературе определяются, как совокупность экономических отношений, возникающих в&nbsp;процессе формирования, распределения и&nbsp;использования централизованных и&nbsp;децентрализованных фондов денежных средств.',
  allowHTML: true,
  theme: 'grey',
});

//Свайпер в проекты
const swiper2 = new Swiper('.swiper-projects', {
  speed: 400,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 25,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next-projects',
    prevEl: '.swiper-button-prev-projects',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  breakpoints: {
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1600: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});

//Валидация
document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.contacts__form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.contacts__form-name', [{
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'customRegexp',
      value: /[a-z]/gi,
      errorMessage: "Недопустимый формат"
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: "Не достаточное количество символов"
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: "Вы ввели больше чем положено",
    },
    ])
    .addField('.contacts__form-tel', [{
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',

    },
    {
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Не достаточное количество символов в строке',
    }])

})


//Яндекс карта
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 12,
    controls: []
  });

  var myPlacemark = new ymaps.Placemark([55.760236, 37.614877], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/contacts-marker.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });

  geolocationControl = new ymaps.control.GeolocationControl({
    options: {

      position: {
        right: '18px',
        top: '360px'
      }
    }
  }),

  zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "small",
      position: {
        left: 'auto',
        right: '18px',
        top: '270px'
      }
    }
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.controls.add(geolocationControl);
  myMap.controls.add(zoomControl);
  myMap.behaviors.disable('scrollZoom');
}


if (window.applyFocusVisiblePolyfill != null) {
  window.applyFocusVisiblePolyfill(myComponent.shadowRoot);
}


