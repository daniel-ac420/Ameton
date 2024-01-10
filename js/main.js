const swiper = new Swiper(".faq-box", {
	direction: "horizontal",
	loop: true,
	spaceBetween: 24,
	slidesPerView: 4,

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	
	breakpoints: {
		1181: {
			slidesPerView: 4
		},
		1024: {
			slidesPerView: 3
		},
		768: {
			slidesPerView: 2
		},
		320: {
			slidesPerView: 1
		}
	}
});