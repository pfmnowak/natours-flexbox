'use strict';

// Navigation functionality
const navButton = document.getElementById('navi-toggle');
const navLinks = document.querySelectorAll('.navigation__link');

Array.from(navLinks).forEach(link =>
	link.addEventListener('click', () => {
		navButton.checked = false;
	})
);

// Closing popup when clicked outside
const popup = document.querySelector('.popup');
popup.addEventListener('click', event => {
	if (!event.target.closest('.popup__content')) {
		window.location.hash = '#section-tours';
	}
});
