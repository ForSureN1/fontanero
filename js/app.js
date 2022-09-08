document.addEventListener('DOMContentLoaded', () => {

    // sliders
    $('.hero__slider').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        fade: true,
        arrows: true,
        dots: true,
        nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#D3D3D3" fill-opacity="0.32"/><g clip-path="url(#clip0_148_1211)"><path d="M14.0099 12.3583L22.3225 20L14.0099 27.6417C14.0099 27.6417 13.8558 28.3333 14.7623 29.1667C15.6688 30 16.5753 30 16.5753 30L26.5468 20.8333C26.5468 20.8333 27 20.4167 27 20C27 19.5833 26.5468 19.1667 26.5468 19.1667L16.5753 10C16.5753 10 15.6688 10 14.7623 10.8333C13.8558 11.6667 14.0099 12.3583 14.0099 12.3583Z" fill="white" fill-opacity="0.49"/></g><defs><clipPath id="clip0_148_1211"><rect width="20" height="20" fill="white" transform="translate(30 10) rotate(90)"/></clipPath></defs></svg></button>',
        prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#D3D3D3" fill-opacity="0.32"/><g clip-path="url(#clip0_148_1211)"><path d="M14.0099 12.3583L22.3225 20L14.0099 27.6417C14.0099 27.6417 13.8558 28.3333 14.7623 29.1667C15.6688 30 16.5753 30 16.5753 30L26.5468 20.8333C26.5468 20.8333 27 20.4167 27 20C27 19.5833 26.5468 19.1667 26.5468 19.1667L16.5753 10C16.5753 10 15.6688 10 14.7623 10.8333C13.8558 11.6667 14.0099 12.3583 14.0099 12.3583Z" fill="white" fill-opacity="0.49"/></g><defs><clipPath id="clip0_148_1211"><rect width="20" height="20" fill="white" transform="translate(30 10) rotate(90)"/></clipPath></defs></svg></button>',
        responsive: [{
            breakpoint: 576,
            settings: {
                arrows: false,
            }
        }]
    });

    $('.partners__items').slick({
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        arrows: true,
        nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#fff" fill-opacity="1"/><g clip-path="url(#clip0_148_1211)"><path d="M14.0099 12.3583L22.3225 20L14.0099 27.6417C14.0099 27.6417 13.8558 28.3333 14.7623 29.1667C15.6688 30 16.5753 30 16.5753 30L26.5468 20.8333C26.5468 20.8333 27 20.4167 27 20C27 19.5833 26.5468 19.1667 26.5468 19.1667L16.5753 10C16.5753 10 15.6688 10 14.7623 10.8333C13.8558 11.6667 14.0099 12.3583 14.0099 12.3583Z" fill="black" fill-opacity="1"/></g><defs><clipPath id="clip0_148_1211"><rect width="20" height="20" fill="white" transform="translate(30 10) rotate(90)"/></clipPath></defs></svg></button>',
        prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#fff" fill-opacity="1"/><g clip-path="url(#clip0_148_1211)"><path d="M14.0099 12.3583L22.3225 20L14.0099 27.6417C14.0099 27.6417 13.8558 28.3333 14.7623 29.1667C15.6688 30 16.5753 30 16.5753 30L26.5468 20.8333C26.5468 20.8333 27 20.4167 27 20C27 19.5833 26.5468 19.1667 26.5468 19.1667L16.5753 10C16.5753 10 15.6688 10 14.7623 10.8333C13.8558 11.6667 14.0099 12.3583 14.0099 12.3583Z" fill="black" fill-opacity="1"/></g><defs><clipPath id="clip0_148_1211"><rect width="20" height="20" fill="white" transform="translate(30 10) rotate(90)"/></clipPath></defs></svg></button>',
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [{
                breakpoint: 1401,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1301,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            }
        ]
    });

    $('.popular__slider').slick({
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        arrows: true,
        nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#fff" fill-opacity="1"/><g clip-path="url(#clip0_148_1211)"><path d="M14.0099 12.3583L22.3225 20L14.0099 27.6417C14.0099 27.6417 13.8558 28.3333 14.7623 29.1667C15.6688 30 16.5753 30 16.5753 30L26.5468 20.8333C26.5468 20.8333 27 20.4167 27 20C27 19.5833 26.5468 19.1667 26.5468 19.1667L16.5753 10C16.5753 10 15.6688 10 14.7623 10.8333C13.8558 11.6667 14.0099 12.3583 14.0099 12.3583Z" fill="black" fill-opacity="1"/></g><defs><clipPath id="clip0_148_1211"><rect width="20" height="20" fill="white" transform="translate(30 10) rotate(90)"/></clipPath></defs></svg></button>',
        prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#fff" fill-opacity="1"/><g clip-path="url(#clip0_148_1211)"><path d="M14.0099 12.3583L22.3225 20L14.0099 27.6417C14.0099 27.6417 13.8558 28.3333 14.7623 29.1667C15.6688 30 16.5753 30 16.5753 30L26.5468 20.8333C26.5468 20.8333 27 20.4167 27 20C27 19.5833 26.5468 19.1667 26.5468 19.1667L16.5753 10C16.5753 10 15.6688 10 14.7623 10.8333C13.8558 11.6667 14.0099 12.3583 14.0099 12.3583Z" fill="black" fill-opacity="1"/></g><defs><clipPath id="clip0_148_1211"><rect width="20" height="20" fill="white" transform="translate(30 10) rotate(90)"/></clipPath></defs></svg></button>',
        pauseOnFocus: false,
        pauseOnHover: true,
        responsive: [{
                breakpoint: 1401,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1301,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    })

    let burger = document.querySelector('.burger')
    let burgerNav = document.querySelector('#nav-icon2')
    let nav = document.querySelector('.header__nav')
    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active')
            burgerNav.classList.toggle('open')
        })
    }

    // show popup

    let formPopup = document.querySelector('.popupform');
    let formPopupClose = document.querySelector('.popupform__block-close');
    if (formPopupClose) {
        formPopupClose.addEventListener('click', () => {
            let formPopupAnimate = formPopup.animate(
                [{ opacity: '1' }, { opacity: '0' }], { duration: 300, fill: 'forwards', easing: 'ease-in' }
            );
            formPopupAnimate.addEventListener('finish', () => {
                formPopup.style.display = 'none'
            });
        });
    }

    let jsShowPopup = document.querySelectorAll('.js-show-popup');
    if (jsShowPopup.length) {
        jsShowPopup.forEach((btn) => {
            btn.addEventListener('click', () => {
                formPopup.style.display = 'flex'
                formPopup.animate([{ opacity: '0' }, { opacity: '1' }], {
                    duration: 300,
                    fill: 'forwards',
                    easing: 'ease-in',
                });
            });
        });
    }

    // animation logo
    let headerLogo = document.querySelector('.header__logo svg');
    if (headerLogo) {
        let blobLeft = headerLogo.querySelector('.left-blob');
        let blobRight = headerLogo.querySelector('.right-blob');
        let wave = headerLogo.querySelector('.wave');
        blobLeft.animate([
            { transform: 'rotate(0)' },
            { transform: 'rotate(-180deg) scale(.8)' },
            { transform: 'rotate(-360deg) scale(1)' },
        ], { duration: 2500, easing: 'ease-in-out', fill: 'forwards', iterations: Infinity });
        blobRight.animate([
            { transform: 'rotate(0)' },
            { transform: 'rotate(180deg) scale(.8)' },
            { transform: 'rotate(360deg) scale(1)' },
        ], { duration: 2500, easing: 'ease-in-out', fill: 'forwards', iterations: Infinity });
        wave.animate([
            { transform: 'translate(0, -2px)' },
            { transform: 'translate(10px, -2px)' },
            { transform: 'translate(0, -2px)' },
            { transform: 'translate(5px, -2px)' },
            { transform: 'translate(-5px, -2px)' },
            { transform: 'translate(0, -2px)' },
        ], { duration: 5000, easing: 'linear', fill: 'forwards', iterations: Infinity });
    }

    // calculate max-height for catalog items
    let catalog = document.querySelector('.catalog');
    let catalogBtn = document.querySelector('.header__catalog-btn');
    document.addEventListener('click', e => {
        const target = e.target;
        if (!target.classList.contains('header__catalog-btn') && !target.closest('.catalog')) {
            catalog.classList.remove('active');
        }
    })
    if (catalogBtn) {
        catalogBtn.addEventListener('click', () => {
            catalog.classList.toggle('active');
        })
    }
    if (catalog) {
        let catalogBlock = document.querySelector('.catalog__items');
        let catalogList = document.querySelector('.catalog__list');
        catalogBlock.style.maxHeight = catalogList.clientHeight + 'px';
        // filter catalog
        let catalogItems = document.querySelectorAll('.catalog__item');
        catalog.addEventListener('click', e => {
            const target = e.target;
            if (target.classList.contains('catalog__list-item')) {
                let targetId = target.getAttribute('data-id');
                if (!target.classList.contains('active')) {
                    let activeTab = catalog.querySelector('.catalog__list-item.active');
                    if (activeTab) {
                        activeTab.classList.remove('active');
                    }
                    catalogItems.forEach(item => {
                        if (targetId === item.getAttribute('data-id')) {
                            item.style.display = 'grid';
                            item.animate([
                                { opacity: 0 },
                                { opacity: 1 }
                            ], { duration: 300, easing: 'ease-in-out', fill: 'forwards' })
                        } else {
                            item.style.display = 'none';
                        }
                    });
                    catalogBlock.classList.add('active');
                }
                target.classList.add('active');
            }
            if (target.classList.contains('catalog__items-back')) {
                let activeTab = catalog.querySelector('.catalog__list-item.active');
                if (activeTab) {
                    activeTab.classList.remove('active');
                }
                catalogBlock.classList.remove('active');
            }
        })
    }

});

function submitForm() {
    $('#form_loader').show();
}
//Alert form
let alertt = document.querySelector(".alert--fixed");
let alertClose = document.querySelectorAll(".alert--close")
for (let item of alertClose) {
    item.addEventListener('click', function(event) {
        alertt.classList.remove("alert--active")
        alertt.classList.remove("alert--warning")
        alertt.classList.remove("alert--error")
    })
}
// $.fn.setCursorPosition = function(pos) {
//     if ($(this).get(0).setSelectionRange) {
//         $(this).get(0).setSelectionRange(pos, pos)
//     } else if ($(this).get(0).createTextRange) {
//         var range = $(this).get(0).createTextRange()
//         range.collapse(true)
//         range.moveEnd('character', pos)
//         range.moveStart('character', pos)
//         range.select()
//     }
// }
// $('input[type="tel"]').click(function() {
//     $(this).setCursorPosition(3)
// }).mask('+7 (999) 999 99 99')