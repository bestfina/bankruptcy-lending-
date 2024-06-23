if (window.screen.width < 1024 && window.screen.width > 600) {
    const swiper = new Swiper('.reviews__swiper', {
        slidesPerView: 2,
        spaceBetween: 15,
        navigation: {
            nextEl: '.reviews__swiper-button-next',
            prevEl: '.reviews__swiper-button-prev',
        },
    });
    const swiper2 = new Swiper('.certificates__swiper', {
        slidesPerView: 3,
        spaceBetween: 15,
        navigation: {
            nextEl: '.certificates__swiper-button-next',
            prevEl: '.certificates__swiper-button-prev',
        },

    });
} else if (window.screen.width < 600) {
    const swiper = new Swiper('.reviews__swiper', {
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: '.reviews__swiper-button-next',
            prevEl: '.reviews__swiper-button-prev',
        },
    });
    const swiper2 = new Swiper('.certificates__swiper', {
        slidesPerView: 2,
        spaceBetween: 15,
        navigation: {
            nextEl: '.certificates__swiper-button-next',
            prevEl: '.certificates__swiper-button-prev',
        },

    });
} else if (1) {
    const swiper = new Swiper('.reviews__swiper', {
        slidesPerView: 3,
        spaceBetween: 15,
        navigation: {
            nextEl: '.reviews__swiper-button-next',
            prevEl: '.reviews__swiper-button-prev',
        },
    });
    const swiper2 = new Swiper('.certificates__swiper', {
        slidesPerView: 5,
        spaceBetween: 15,
        navigation: {
            nextEl: '.certificates__swiper-button-next',
            prevEl: '.certificates__swiper-button-prev',
        },

    });
}

const burgerMenu = document.querySelector('.burger')
document.querySelector('.header__mob-burger').addEventListener('click', event => {
    document.body.style.overflow = 'hidden'
    burgerMenu.classList.add('burger_active')
})
burgerMenu.addEventListener('click', event => {
    if (event.target !== burgerMenu) {
        document.body.style.overflowY = 'auto'
        burgerMenu.classList.remove('burger_active')
    }
    if (event.target == document.querySelector('.burger__close')) {
        document.body.style.overflowY = 'auto'
        burgerMenu.classList.remove('burger_active')
    }
})

// наш попап 
const Popup = document.querySelector('.popup')
    // кнопка закрытия поп-ап
const closePopup = document.querySelector('.popup__close')
    // контейнер поп-ап
const ContainerPopup = document.querySelector('.container-popup')
    // перебираем все кнопки и выставляем им по клику поп ап
document.querySelector('.main-section__button').addEventListener('click', event => {
        document.querySelector('.container-popup').classList.add('container-popup_active')
        document.querySelector('.popup').classList.add('popup_active')
        document.body.style.overflow = 'hidden'
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    // при клике на контейнер поп-ап проверяем, если клик на кнопку закрыть, то закрываем
ContainerPopup.addEventListener('click', (event) => {
    const insidePopup = event.composedPath().includes(Popup)
        // проверяем произошло ли нажатие за пределами поп-ап
    if (!insidePopup) {
        document.body.style.overflow = ''
        document.querySelector('.container-popup').classList.remove('container-popup_active')
        document.querySelector('.popup').classList.remove('popup_active')
    }
    if (event.target == closePopup) {
        // удалить скрытие полосы прокрутки при закрытом поп ап
        document.body.style.overflow = ''
        document.querySelector('.container-popup').classList.remove('container-popup_active')
        document.querySelector('.popup').classList.remove('popup_active')
    }
})