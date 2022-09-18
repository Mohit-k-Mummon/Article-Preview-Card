const button = document.querySelectorAll('.card__button');
const cardFooter = document.querySelector('.card__footer');
const cardFooterActive = document.querySelector('.card__footer.active');
let active = null;

console.log(button);

button.forEach(btn => {
	btn.addEventListener('click', function () {
		if (active !== 'true') {
			cardFooter.style.display = 'none';
			cardFooterActive.style.display = 'flex';
			active = 'true';
		} else {
			cardFooter.style.display = 'flex';
			cardFooterActive.style.display = 'none';
			active = 'false';
		}
	});
});
