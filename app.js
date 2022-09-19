const button = document.querySelector('.card__button');
const cardFooter = document.querySelector('.card__footer');
const cardFooterActive = document.querySelector('.card__footer.active');
const buttonActive = document.querySelector('.card__button-active');
let active = null;

button.addEventListener('click', function () {
	if (active !== 'true') {
		cardFooterActive.style.opacity = '1';
		cardFooterActive.style.maxHeight = '100vh';
		active = 'true';
	} else {
		cardFooterActive.style.opacity = '0';
		cardFooterActive.style.maxHeight = '0';
		active = 'false';
	}
});

buttonActive.addEventListener('click', function () {
	if (active !== 'true') {
		cardFooterActive.style.opacity = '1';
		cardFooterActive.style.maxHeight = '100vh';
		active = 'true';
	} else {
		cardFooterActive.style.opacity = '0';
		cardFooterActive.style.maxHeight = '0';

		active = 'false';
	}
});
