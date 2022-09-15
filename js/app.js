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

    // products sliders


    let swiperProductMain = new Swiper(".product__slider-gallery", {
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 4,
            },
        },
    });
    let swiperProductGallery = new Swiper(".product__slider-main", {
        spaceBetween: 0,
        effect: 'fade',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiperProductMain,
        },
    });


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
            btn.addEventListener('click', (e) => {
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
    let catalog = document.querySelector('.catalog-header');
    let catalogBtn = document.querySelector('.header__catalog-btn');
    document.addEventListener('click', e => {
        const target = e.target;
        if (!target.classList.contains('header__catalog-btn') && !target.closest('.catalog-header')) {
            catalog.classList.remove('active');
        }
    })
    if (catalogBtn) {
        catalogBtn.addEventListener('click', () => {
            catalog.classList.toggle('active');
        })
    }
    if (catalog) {
        let catalogBlock = document.querySelector('.catalog-header__items');
        let catalogList = document.querySelector('.catalog-header__list');
        catalogBlock.style.maxHeight = catalogList.clientHeight + 'px';
        // filter catalog
        let catalogItems = document.querySelectorAll('.catalog-header__item');
        catalog.addEventListener('click', e => {
            const target = e.target;
            if (target.classList.contains('catalog-header__list-item')) {
                let targetId = target.getAttribute('data-id');
                if (!target.classList.contains('active')) {
                    let activeTab = catalog.querySelector('.catalog-header__list-item.active');
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
            if (target.classList.contains('catalog-header__items-back')) {
                let activeTab = catalog.querySelector('.catalog-header__list-item.active');
                if (activeTab) {
                    activeTab.classList.remove('active');
                }
                catalogBlock.classList.remove('active');
            }
        })
    }

    // products tabs
    let tabs = document.querySelector('.description')
    if (tabs) {
        tabsConstruct();
    }

    // tabs construction
    function tabsConstruct() {
        let descParentTabs = document.querySelector('.description__tabs')
        let btn = document.querySelectorAll('.description__tab');
        let block = document.querySelectorAll('.description__content-item');
        btn.forEach((key, index) => {
            key.addEventListener('click', function() {
                block.forEach((item, itemindex) => {
                    item.classList.toggle('active', index === itemindex)
                });
            });
        });
        descParentTabs.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('description__tab')) {
                btn.forEach(item => {
                    item.classList.remove('active')
                })
            }
            target.classList.add('active')
        });
    }


    //Корзина магазина
    function requestCart() {

        const cartDOMElement = document.querySelector('.js-cart')
        const cartCompareDOMElement = document.querySelector('.compare__slider')
        const cartItemsCounterDOMElement = document.querySelectorAll('.js-cart-total-count-items')
        const cartTotalPriceDOMElement = document.querySelectorAll('.js-cart-total-summa')
            // const cartTotalSummaDOMElement = document.querySelector('.js-cart-total-price')
            // const totalSumma = document.querySelector('.js-all-summa')

        const cart = JSON.parse(localStorage.getItem('fontaneroCart')) || {};


        const clearBusket = () => {
            let busketTable = document.querySelector('.busket__table');
            let busketItems = document.querySelector('.busket__items ');
            let busketForm = document.querySelector('.busket__form');
            let empty = document.querySelector('.empty');
            if (Object.keys(cart).length == 0) {
                busketTable.classList.add('disabled');
                busketItems.classList.add('disabled');
                busketForm.classList.add('disabled');
                empty.classList.add('active');
            }
        }
        const busketpage = document.querySelector('.busket')
        if (busketpage) {
            clearBusket();
        }
        //отображаем добавленный товар в корзине
        const renderCartItem = ({ id, articul, name, totalprice, price, src, quantity, href }) => {
            const cartItemDOMElement = document.createElement('div');
            if (articul === null) {
                articul = '';
            }
            totalprice = totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            const cartItemTemplate = `
                <a href="${href}" class="busket__item-img">
                    <img src="${src}" alt="">
                </a>
                <div class="busket__item-info">
                    <a href="${href}" class="busket__item-title">${name}</a>
                    <div class="busket__item-articul">
                        Арт: <span>${articul}</span>
                    </div>
                </div>
                <div class="busket__item-price">${price} тг</div>
                <div class="busket__item-wrapper">
                    <div class="busket__item-counter">
                        <button class="busket__item-decrease js-minus">
                            <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.8337 1.83334H0.166992V0.166672H11.8337V1.83334Z" fill="#7E878D"/>
                            </svg>
                        </button>
                        <span class="busket__item-count js-cart-item-quantity">${quantity}</span>
                        <button class="busket__item-increase js-plus">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.83338 0.584218L7.16578 0.584218L7.16578 7.1662L0.583797 7.1662V8.8338L7.16578 8.8338L7.16578 15.4158L8.83338 15.4158L8.83338 8.8338H15.4154V7.1662H8.83338L8.83338 0.584218Z" fill="#333333"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="busket__item-total js-cart-item-totalprice">${totalprice} тг</div>
                <a href="javascript:;" class="busket__item-delete remove">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_375_2922)">
                        <path d="M18.75 20H23.75V22.5H18.75V20ZM18.75 10H27.5V12.5H18.75V10ZM18.75 15H26.25V17.5H18.75V15ZM3.75 22.5C3.75 23.875 4.875 25 6.25 25H13.75C15.125 25 16.25 23.875 16.25 22.5V10H3.75V22.5ZM17.5 6.25H13.75L12.5 5H7.5L6.25 6.25H2.5V8.75H17.5V6.25Z" fill="#7E878D"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_375_2922">
                        <rect width="30" height="30" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>
            `;

            cartItemDOMElement.innerHTML = cartItemTemplate;
            cartItemDOMElement.setAttribute('data-id', id);
            cartItemDOMElement.classList.add('busket__item');
            cartDOMElement.appendChild(cartItemDOMElement);
            totalBusket();
            updateCart();
        }


        //сохраняем товар в LocalStorage
        const saveCart = () => {
            localStorage.setItem('fontaneroCart', JSON.stringify(cart));
        }


        // подсчитываение колличества и суммы товара
        const totalBusket = () => {
            let totalcount = 0;
            const ids = Object.keys(cart);
            for (let i = 0; i < ids.length; i++) {
                const id = ids[i]
                totalcount += +(cart[id].quantity);
            }

            let totalAll = 0;
            const price = document.querySelectorAll('.js-cart-item-totalprice');
            for (let i = 0; i < price.length; i++) {
                totalAll = totalAll + parseInt(price[i].innerHTML.replace(' ', ''));
            }

            // cartTotalPriceDOMElement.textContent = totalAll + ' тг';
            // cartTotalSummaDOMElement.textContent = total + ' тг';
            cartItemsCounterDOMElement.forEach(elem => {
                    elem.textContent = totalcount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                })
                // Итоговая сумма всех товаров
            cartTotalPriceDOMElement.forEach(elem => {
                elem.textContent = totalAll.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' тг';
            })
            $('.js-cart-total-summa').attr('data-summ', totalAll);

            if (ids.length == 0) {
                cartTotalPriceDOMElement.forEach(elem => {
                        elem.textContent = totalAll + ' тг'
                    })
                    // cartTotalSummaDOMElement.textContent = 0;
                $('.js-cart-total-summa').attr('data-summ', 0);
            }
            updateCart();
            // checkSelectDeliv();
        }

        function totalBusketHeader() {
            let busket = document.querySelector('.count__busket')
            let totalcount = 0;
            const ids = Object.keys(cart);
            for (let i = 0; i < ids.length; i++) {
                const id = ids[i]
                totalcount += +(cart[id].quantity);
            }
            console.log(totalcount)
            busket.innerHTML = totalcount;
            if (totalcount > 1) {
                busket.classList.add('active')
            } else {
                busket.classList.remove('active')
            }
        }
        totalBusketHeader();
        //Проверка выбранного селекта для доставки товара
        // let select = document.getElementById('deliv')
        // if (select) {
        //     select.addEventListener('input', checkSelectDeliv)
        // }

        // function checkSelectDeliv() {
        //     let summa = document.querySelector('.js-all-summa')
        //     let deliv = document.querySelector('.deliv')
        //     let select = document.getElementById('deliv')
        //     let value = select.value
        //     let totalAll = 0;
        //     // let price = document.querySelectorAll('.js-cart-item-totalprice');
        //     // for (let i = 0; i < price.length; i++) {
        //     //     let parseSumma = totalAll + parseInt(price[i].innerHTML)
        //     //     totalAll = parseSumma;
        //     // }
        //     if (value === 'delivery') {
        //         // let parseSumma = parseInt(totalAll + 2000)
        //         // summa.innerHTML = parseSumma.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' тг';
        //         deliv.classList.add('active')
        //     } else {
        //         // summa.innerHTML = totalAll.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' тг'
        //         deliv.classList.remove('active')
        //     }
        //     requestTable();
        //     // console.log(value)
        // }

        // проверка radiobuttons доставки
        let radioPickup = document.querySelector('#pickup');
        let radioDeliv = document.querySelector('#delivery');
        let delivHtmlTemplate = document.querySelector('.busket-form__order-row .deliv');
        if (radioPickup) {
            radioPickup.addEventListener('input', () => {
                checkDeliveryButtons(radioPickup)
            })
        }
        if (radioDeliv) {
            radioDeliv.addEventListener('input', () => {
                checkDeliveryButtons(radioDeliv)
            })
        }

        function checkDeliveryButtons(radio) {
            if (radio.checked) {
                delivHtmlTemplate.textContent = radio.nextElementSibling.textContent
            }
        }

        //Удаление из корзины
        const deleteCartItem = (id) => {
                const cartItemDOMElement = cartDOMElement.querySelector(`[data-id="${id}"]`);
                // const tableElement = tableDOMElement.querySelector(`[data-product-articul="${articul}"]`);
                cartDOMElement.removeChild(cartItemDOMElement);
                // tableDOMElement.removeChild(tableElement);
                delete cart[id];
                updateCart();
                totalBusket();
            }
            //Обновление количества товара и итоговой суммы
        const updateQuantityTotalPrice = (id, quantity) => {
                const cartItemDOMElement = cartDOMElement.querySelector(`[data-id="${id}"`);
                const cartItemQuantityDOMElement = cartItemDOMElement.querySelector('.js-cart-item-quantity');
                // const cartTotalPriceDOMElement = document.querySelector('.js-cart-total-price')
                const cartItemPriceDOMElement = cartItemDOMElement.querySelector('.js-cart-item-totalprice');

                const ids = Object.keys(cart);
                cart[id].quantity = quantity;
                cartItemQuantityDOMElement.textContent = quantity;
                cart[id].totalprice = cart[id].quantity * cart[id].price;
                cartItemPriceDOMElement.textContent = cart[id].totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' тг';
                console.log(cart[id].totalprice)

                // tableQuantity.textContent = quantity;
                cart[id].totalprice = cart[id].quantity * cart[id].price;
                // tableTotal.textContent = cart[articul].totalprice;

                updateCart();
            }
            //Увеличение количества товара и итоговой суммы
        const increaseQuantity = (id) => {
                const newQuantity = +(cart[id].quantity) + 1;
                updateQuantityTotalPrice(id, newQuantity);
            }
            //Уменьшение количества товара и итоговой суммы
        const decreaseQuantity = (id) => {
            const newQuantity = +(cart[id].quantity) - 1;
            if (newQuantity >= 1) {
                updateQuantityTotalPrice(id, newQuantity);
            }
        }



        //Добавление в корзину
        const addCartItem = (data) => {
            // console.log(data)
            const { id } = data;
            cart[id] = data;
            updateCart();
            if (cartDOMElement) {
                renderCartItem(data);
            }
        }


        //Обновляем данные в LocalStorage
        const updateCart = () => {
            saveCart();
        }


        //Получаем данные для объекта
        const getProductData = (productDOMElement) => {
            const button = document.querySelector('.buy__product')
            const id = productDOMElement.getAttribute('data-id')
            const name = productDOMElement.getAttribute('data-product-name');
            // const desc = productDOMElement.getAttribute('data-product-desc');
            const articul = productDOMElement.getAttribute('data-product-articul');
            // const size = productDOMElement.getAttribute('data-product-size');
            // const color = productDOMElement.getAttribute('data-product-color');
            const price = productDOMElement.getAttribute('data-product-price');
            const src = productDOMElement.getAttribute('data-product-img');
            const quantity = productDOMElement.getAttribute('data-product-quantity');
            let href = productDOMElement.getAttribute('data-product-href');
            if (button) {
                href = window.location.href;
            }
            // const quantity = 1;
            const totalprice = quantity * +(price);
            return { id, name, articul, price, totalprice, src, quantity, href };
        }



        const renderCart = () => {
            const ids = Object.keys(cart);
            // console.log(ids);
            ids.forEach((id) => renderCartItem(cart[id]));
        };


        const disabledButton = () => {
            // console.log(cart)
            const test = document.querySelectorAll('.js-product')
            const buttonCounter = document.querySelector('.product__info-counter');
            for (let i = 0; i < test.length; i++) {
                const attr = (test[i].getAttribute('data-id'))
                const parent = test[i].querySelector('.js-buy')
                    // console.log(parent)
                    // console.log(cart.hasOwnProperty(attr))
                if (cart.hasOwnProperty(attr)) {
                    parent.classList.add('active')
                        // parent.innerHTML = 'Товар в корзине';
                    parent.disabled = true;
                    if (buttonCounter) {
                        buttonCounter.style.pointerEvents = 'none';
                        buttonCounter.style.opacity = '0.5';
                    }
                }

            }

        }
        disabledButton();


        // Вызов popup
        // function showPopup() {
        //     let popup = document.querySelector('.popup-busket')
        //     let body = document.querySelector('body')
        //     let btn = document.querySelector('.popup-busket__link.js')
        //     popup.classList.remove('hidden')
        //     body.style.overflow = 'hidden'
        //     setTimeout(() => { popup.classList.add('active') }, 50)
        //     btn.addEventListener('click', closePopup)
        //     popup, addEventListener('click', (e) => {
        //         if (e.target == popup) {
        //             closePopup();
        //         }
        //     })

        //     function closePopup() {
        //         popup.classList.remove('active')
        //         body.style.overflow = 'unset'
        //         setTimeout(() => { popup.classList.add('hidden') }, 300)
        //     }
        // }


        //Инициализация
        const cartInit = () => {
            if (cartDOMElement) {
                renderCart();
            }

            if (cartCompareDOMElement) {
                renderCompareCart();
            }

            document.querySelector('body').addEventListener('click', (e) => {
                const target = e.target;
                //В корзину
                if (target.classList.contains('js-buy')) {
                    e.preventDefault();
                    const productDOMElement = target.closest('.js-product');
                    const data = getProductData(productDOMElement);
                    addCartItem(data);
                    disabledButton();
                    totalBusketHeader();
                    // showPopup();
                }

                //Удалить из корзины
                if (target.classList.contains('remove')) {
                    e.preventDefault();
                    const cartItemDOMElement = target.closest('.busket__item');
                    const productId = cartItemDOMElement.getAttribute('data-id');
                    deleteCartItem(productId);
                    clearBusket();
                    requestTable();
                    totalBusketHeader();
                }

                //Увеличить
                if (target.classList.contains('js-plus')) {
                    e.preventDefault();
                    const cartItemDOMElement = target.closest('.busket__item');
                    const productId = cartItemDOMElement.getAttribute('data-id');
                    increaseQuantity(productId);
                    totalBusket();
                    requestTable();
                    totalBusketHeader();
                }

                //Уменьшить
                if (target.classList.contains('js-minus')) {
                    e.preventDefault();
                    const cartItemDOMElement = target.closest('.busket__item');
                    const productId = cartItemDOMElement.getAttribute('data-id');
                    decreaseQuantity(productId);
                    totalBusket();
                    requestTable();
                    totalBusketHeader();
                }

                if (target.classList.contains('decrease')) {
                    let targetProduct = target.closest('.js-product');
                    let newProductQuantity = +(targetProduct.getAttribute('data-product-quantity')) - 1;
                    if (newProductQuantity < 1) {
                        newProductQuantity = 1;
                    }
                    targetProduct.setAttribute('data-product-quantity', newProductQuantity);
                    let targetCountTemplate = targetProduct.querySelector('.product__info-counter span');
                    targetCountTemplate.textContent = newProductQuantity;
                }

                if (target.classList.contains('increase')) {
                    let targetProduct = target.closest('.js-product');
                    let newProductQuantity = +(targetProduct.getAttribute('data-product-quantity')) + 1;
                    targetProduct.setAttribute('data-product-quantity', newProductQuantity);
                    let targetCountTemplate = targetProduct.querySelector('.product__info-counter span');
                    targetCountTemplate.textContent = newProductQuantity;
                }


            });
        }
        cartInit();
    }
    requestCart();
    //Скрытая таблица для отправки формы
    const textarea = document.querySelector('.textarea-table');
    // const textareaID = document.querySelector('.textarea-table_2')

    function requestTable() {
        const cart = JSON.parse(localStorage.getItem('fontaneroCart')) || {};
        let totalSumma = document.querySelector('.js-cart-total-summa').getAttribute('data-summ');
        console.log(totalSumma)
        const ids = Object.keys(cart);
        let textareaPopupOrder = document.querySelector('#textarea-order-popup');
        if (textareaPopupOrder) {
            textareaPopupOrder.innerHTML = localStorage.getItem('fontaneroCart');
        }
        // textareaID.innerHTML = localStorage.getItem('fontaneroCart');

        let tableItem = '';
        // let tableItemID = '';
        // let totalSumma = 0;
        let tableTotalPrice = '';
        const renderTable = () => {
            for (let i in ids) {
                const keys = ids[i];
                const id = cart[keys].id
                const name = cart[keys].name;
                const articul = cart[keys].articul;
                const quantity = cart[keys].quantity;
                const price = cart[keys].price;
                const totalprice = cart[keys].totalprice;
                tableItem += `
                        <tr>
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${articul}</td>
                        <td>${quantity}</td>
                        <td>${price} тг</td>
                        <td>${totalprice} тг</td>
                        </tr>
                    `
                    // tableItemID += `${id}, `;
                    // totalSumma += totalprice;
                tableTotalPrice = `
                    <tr>
                        <td colspan="6">Итоговая сумма всех товаров - ${totalSumma} </td>
                    </tr>
                    `;
            }
            textarea.innerHTML = `
            <table border="1" cellspacing="0" cellpadding="10">
            <thead>
                <tr>
                <th>ID Товара</th>
                <th>Название</th>
                <th>Артикул</th>
                <th>Количество</th>
                <th>Цена</th>
                <th>Итоговая сумма</th>
                </tr>
            </thead>
            <tbody>${tableItem} ${tableTotalPrice}</tbody>
            </table>
            `;
            // textareaID.innerHTML = `${tableItemID}`;
        }
        renderTable();
    }

    if (textarea) {
        requestTable();
    }


    // закрытие popup-city
    let popupCityClose = document.querySelector('.popup-city__close');
    // if (popupCityClose) {
    //     popupCityClose.addEventListener('click', e => {
    //         let popupAnimateClose = popupCityClose.closest('.popup-city').animate([
    //             { opacity: 1 },
    //             { opacity: 0 }
    //         ], { duration: 300, easing: 'ease-in-out', fill: 'forwards' });
    //         popupAnimateClose.addEventListener('finish', () => {
    //             popupCityClose.closest('.popup-city').style.display = 'none';
    //         })
    //     })
    // }
    document.addEventListener('click', e => {
        const target = e.target;
        if (target.classList.contains('popup-city__close') || target.classList.contains('popup-city')) {
            let popupAnimateClose = popupCityClose.closest('.popup-city').animate([
                { opacity: 1 },
                { opacity: 0 }
            ], { duration: 300, easing: 'ease-in-out', fill: 'forwards' });
            popupAnimateClose.addEventListener('finish', () => {
                popupCityClose.closest('.popup-city').style.display = 'none';
            })
        }
        if (target.classList.contains('popup-order')) {
            let popupAnimateClose = document.querySelector('.popup-order').animate([
                { opacity: 1 },
                { opacity: 0 }
            ], { duration: 300, easing: 'ease-in-out', fill: 'forwards' });
            popupAnimateClose.addEventListener('finish', () => {
                document.querySelector('.popup-order').style.display = 'none';
            })
        }
        if (target.classList.contains('js-show-popup-order')) {
            document.querySelector('.popup-order').style.display = 'flex';
            document.querySelector('.popup-order').animate([
                { opacity: 0 },
                { opacity: 1 }
            ], { duration: 300, easing: 'ease-in-out', fill: 'forwards' });
        }
        if (target.classList.contains('popup-alert')) {
            let popupAlertAnimate = document.querySelector('.popup-alert').animate([
                { opacity: 1 },
                { opacity: 0 }
            ], { duration: 300, easing: 'ease-in-out', fill: 'forwards' });
            popupAlertAnimate.addEventListener('finish', () => {
                document.querySelector('.popup-alert').style.display = 'none';
            })
        }
    })

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



window.onload = () => {
    let rangeSlider = document.querySelector('#rangeSlider');
    if (rangeSlider) {
        let filterMin = document.querySelector('#filter-min');
        let filterMax = document.querySelector('#filter-max');
        $("#rangeSlider").ionRangeSlider({
            type: "double",
            min: filterMin.value,
            max: filterMax.value,
            from: filterMin.value,
            to: filterMax.value,
            hide_min_max: true,
            hide_from_to: true,
            onChange: function(data) {
                filterMin.setAttribute('value', data.from);
                filterMin.value = data.from;
                filterMax.setAttribute('value', data.to);
                filterMax.value = data.to;
            }
        });
        let my_range = $("#rangeSlider").data("ionRangeSlider");
        filterMin.addEventListener('input', e => {
            my_range.update({
                from: filterMin.value,
            })
        })
        filterMax.addEventListener('input', e => {
            my_range.update({
                to: filterMax.value,
            })
        })
    }
    let filterBlock = document.querySelector('.form-filter');
    if (filterBlock) {
        filterBlock.addEventListener('click', e => {
            const target = e.target;
            if (target.classList.contains('form-filter__block-title')) {
                if (target.classList.contains('active')) {
                    target.nextElementSibling.style.maxHeight = '0px';
                    target.nextElementSibling.style.marginTop = '0';
                }
                if (!target.classList.contains('active')) {
                    target.nextElementSibling.style.maxHeight = target.nextElementSibling.scrollHeight + 'px';
                    target.nextElementSibling.style.marginTop = '20px';
                }
                target.classList.toggle('active');
            }
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
}

$('.select_send').on('change', function() {
    $(this.form).submit();
});