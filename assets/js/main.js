"use strict"
let wrapper = document.querySelector('.wrapper');
let pageSlider = new Swiper('.page', {
	// Свои классы
	wrapperClass: "page__wrapper",
	slideClass: "page__screen",

	// Вертикальный слайдер
	direction: 'vertical',

	// Количество слайдов для показа
	slidesPerView: 'auto',

	// Включаем параллакс
	parallax: true,


	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	},

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Скорость
	speed: 800,

	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,

	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.page__pagination',
		type: 'bullets',
		clickable: true,
		bulletClass: "page__bullet",
		bulletActiveClass: "page__bullet_active",
	},
	// Скролл
	scrollbar: {
		el: '.page__scroll',
		dragClass: "page__drag-scroll",
		// Возможность перетаскивать скролл
		draggable: true
	},

	// Отключаем автоинициализацию
	init: false,

	// События
	on: {
		// Событие инициализации
		init: function () {
			menuSlider();
			setScrollType();
			wrapper.classList.add('_loaded');
		},
		// Событие смены слайда
		slideChange: function () {
			menuSliderRemove();
			menuLinks[pageSlider.realIndex].classList.add('_active');
		},
		resize: function () {
			setScrollType();
		}
	},
});

let menuLinks = document.querySelectorAll('.menu__link')


function menuSlider() {
	if (menuLinks.length > 0) {
		menuLinks[pageSlider.realIndex].classList.add('_active')
		for (let index = 0; index < menuLinks.length; index++) {
			const menuLink = menuLinks[index]
			menuLink.addEventListener('click', function (e) {
				menuSliderRemove()
				pageSlider.slideTo(index, 1300)
				menuLink.classList.add('_active')
				e.preventDefault()
			})
		}
	}
}

function menuSliderRemove() {
	let menuLinkActive = document.querySelector('.menu__link._active')
	if (menuLinkActive) {
		menuLinkActive.classList.remove('_active')
	}
}

let mobMenuLinks = document.querySelectorAll('.mob-menu__link')

function mobMenuSlider() {
	if (mobMenuLinks.length > 0) {
		mobMenuLinks[pageSlider.realIndex].classList.add('_active')
		for (let index = 0; index < mobMenuLinks.length; index++) {
			const mobMenuLink = mobMenuLinks[index]
			mobMenuLink.addEventListener('click', function (e) {
				menuSliderRemove()
				pageSlider.slideTo(index, 1300)
				mobMenuLink.classList.add('_active')
				e.preventDefault()
				let iconMenuActive = document.querySelector('.mob-menu__icon._active').classList.remove('_active');
				let menuBodyActive = document.querySelector('.mob-menu__body._active')
				if (!menuBodyActive) {
					menuBodyActive.classList.remove('_active')
				}
			})
		}
	}
}

function mobMenuSliderRemove() {
	let menuLinkActive2 = document.querySelector('.mob-menu__link._active')
	if (menuLinkActive2) {
		menuLinkActive2.classList.remove('_active')
	}
}
function setScrollType() {
	if (wrapper.classList.contains('_free')) {
		wrapper.classList.remove('_free');
		pageSlider.params.freeMode = false;
	}
	for (let index = 0; index < pageSlider.slides.length; index++) {
		const pageSlide = pageSlider.slides[index];
		const pageSlideContent = pageSlide.querySelector('.screen__content');
		if (pageSlideContent) {
			const pageSlideContentHeight = pageSlideContent.offsetHeight;
			if (pageSlideContentHeight > window.innerHeight) {
				wrapper.classList.add('_free');
				pageSlider.params.freeMode = true;
				break;
			}
		}
	}
}

pageSlider.init()


const iconMenu = document.querySelector('.mob-menu__icon');
const menuBody = document.querySelector('.mob-menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove("_active");
				tabs_blocks[index].classList.remove("_active");
			}
			tabs_item.classList.add("_active");
			tabs_blocks[index].classList.add("_active");
			e.preventDefault();
		});
	}
}


let colors = {
	color1: "#FFFFFF",
	color2: "#FCF9BF"
};
let options = {
	alphaSpeed: 10,
	alphaVariance: 2,
	color: [colors.color1, colors.color2],
	composition: "source-over",
	count: 50,
	direction: 180,
	float: 0,
	glow: 1,
	imageUrl: [
		'/assets/image/s-1.svg',
		'/assets/image/s-2.svg'
	],
	maxAlpha: 1,
	maxSize: 12,
	minAlpha: -0.2,
	minSize: 8,
	parallax: 3.75,
	rotation: 0.5,
	shape: "image",
	speed: 1,
	style: "fill",
	twinkle: false,
	xVariance: 5,
	yVariance: 0,
};
window.onload = function () {
	initSparticles();
}
window.initSparticles = function () {
	var main = document.querySelector('.page');
	window.mySparticles = new sparticles.Sparticles(main, options);
};

document.body.onload = function () {
	setTimeout(function () {
		let preloader = document.querySelector('.cloud')
		preloader.classList.add('done')
	}, 3000)
}