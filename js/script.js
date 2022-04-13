'use strict';

const swiperSlides = document.querySelectorAll('.slider__swiper-main'),
	swiperMain = document.querySelector('.slider__swiper'),

	prev = document.querySelector('.slider__swiper-prev'),
	next = document.querySelector('.slider__swiper-next'),
	swiperWrapper = document.querySelector('.slider__swiper-wrapper'),
	swiperWidth = window.getComputedStyle(swiperMain).width,
	swiperBullets = document.querySelector('.slider__bullets');


let slideIndex = 1,
	offset = 0,
	sliderCount = document.querySelector('.slider__swiper-count'),
	bulletCount = swiperSlides.length;

for (let i = 0; i < bulletCount; i++) {
	swiperBullets.innerHTML += `<div class="slider__bullets__item" set-bullet="${i + 1}"></div>`;
	if (i == 0) {
		document.querySelector('.slider__bullets__item').classList.add('slider__bullets__item-active');
	}
}

const bulletsItems = document.querySelectorAll('.slider__bullets__item');

changeSliderArrows();

swiperWrapper.style.width = 100 * swiperSlides.length + '%';

swiperSlides.forEach(slide => {
	slide.style.width = swiperWidth;
});


next.addEventListener('click', () => {
	if (offset == getNumbers(swiperWidth) * (swiperSlides.length - 1)) {
		offset = 0;
	} else {
		offset += getNumbers(swiperWidth);
	}
	swiperWrapper.style.transform = `translateX(-${offset}px)`;

	if (slideIndex == swiperSlides.length) {
		slideIndex = 1;
	} else {
		slideIndex++;
	}

	changeSliderArrows();
	bulletChangeClass();
});


prev.addEventListener('click', () => {
	if (offset == 0) {
		offset = getNumbers(swiperWidth) * (swiperSlides.length - 1);
	} else {
		offset -= getNumbers(swiperWidth);
	}
	swiperWrapper.style.transform = `translateX(-${offset}px)`;

	if (slideIndex == 1) {
		slideIndex = swiperSlides.length;
	} else {
		slideIndex--;
	}

	changeSliderArrows();
	bulletChangeClass();
});

bulletsItems.forEach((item) => {
	item.addEventListener('click', (event) => {
		const slideTo = event.target.getAttribute('set-bullet');

		slideIndex = slideTo;
		offset = getNumbers(swiperWidth) * (slideTo - 1);

		swiperWrapper.style.transform = `translateX(-${offset}px)`;

		changeSliderArrows();

		bulletChangeClass();
	});
});

function changeSliderArrows() {
	if (swiperSlides.length > 10) {
		if (slideIndex < 10) {
			sliderCount.textContent = `0${slideIndex}/${swiperSlides.length}`;
		} else {
			sliderCount.textContent = `${slideIndex}/${swiperSlides.length}`;
		}
	} else {
		sliderCount.textContent = `0${slideIndex}/0${swiperSlides.length}`;
	}
}

function bulletChangeClass() {
	bulletsItems.forEach(dot => dot.classList.remove('slider__bullets__item-active'));
	bulletsItems[slideIndex - 1].classList.add('slider__bullets__item-active');
}

function getNumbers(item) {
	item = parseInt(item.replace(/\D/g, ''));
	return item;
}

// ----- Simple Slider ------
// showSlides(slideIndex);

// function showSlides(number) {
// 	if (number > swiperSlides.length) {
// 		slideIndex = 1;
// 	}

// 	if (number < 1) {
// 		slideIndex = swiperSlides.length;
// 	}

// 	swiperSlides.forEach(item => {
// 		item.style.display = 'none';
// 	});

// 	swiperSlides[slideIndex - 1].style.display = 'block';

// if (swiperSlides.length < 10) {
// 	sliderCount.textContent = `0${slideIndex}/0${swiperSlides.length}`;
// } else {
// 	sliderCount.textContent = `${slideIndex}/${swiperSlides.length}`;
// }

// }

// function plusSlides(number) {
// 	showSlides(slideIndex += number);
// }

// prev.addEventListener('click', () => {
// 	plusSlides(-1);
// });

// next.addEventListener('click', () => {
// 	plusSlides(1);
// });



// ------ My code -------
/*
const slides = document.querySelectorAll('.slider__slide'),
	prev = document.querySelector('.slider__prev'),
	next = document.querySelector('.slider__next'),
	sliderCount = document.querySelector('.slider__count'),
	arrSlides = Array.from(slides);

arrSlides[0].classList.add('slider__slide-active');
sliderCount.textContent = `1/3`;

next.addEventListener('click', () => {
	let slidesTotal = slides.length,
		sliderActive = document.querySelector('.slider__slide-active'),
		activeClass = arrSlides.indexOf(sliderActive);

	if (activeClass + 1 == slidesTotal) {
		arrSlides[activeClass].classList.remove('slider__slide-active');
		arrSlides[0].classList.add('slider__slide-active', 'slider-fade');
		sliderCount.textContent = `${activeClass = 1}/${slidesTotal}`;
		console.log(`Slide number: ${activeClass = 1}`);
	} else {
		arrSlides[activeClass].classList.remove('slider__slide-active');
		arrSlides[activeClass + 1].classList.add('slider__slide-active', 'slider-fade');
		sliderCount.textContent = `${activeClass + 2}/${slidesTotal}`;
		console.log(`Slide number: ${activeClass + 2}`);
	}
});

prev.addEventListener('click', () => {
	let slidesTotal = slides.length,
		sliderActive = document.querySelector('.slider__slide-active'),
		activeClass = arrSlides.indexOf(sliderActive);

	if (activeClass == 0) {
		arrSlides[activeClass].classList.remove('slider__slide-active');
		arrSlides[slidesTotal - 1].classList.add('slider__slide-active', 'slider-fade');
		sliderCount.textContent = `${slidesTotal}/${slidesTotal}`;
		console.log(`Slide number: ${slidesTotal}`);
	} else {
		arrSlides[activeClass].classList.remove('slider__slide-active');
		arrSlides[activeClass - 1].classList.add('slider__slide-active', 'slider-fade');
		sliderCount.textContent = `${activeClass}/${slidesTotal}`;
		console.log(`Slide number: ${activeClass}`);
	}

});
*/