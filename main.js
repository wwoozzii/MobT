const burgerCont = document.querySelector('.burgerCont')
const burgerMenu = document.querySelector('.burgerMenu')
const dropMenu = document.querySelector('.dropMenu')
const ACTIVE_CLASS = 'active';
const VISIBLE_CLASS = 'visible';

burgerCont.addEventListener("click", toggleMenu)

function toggleMenu() {
	dropMenu.classList.toggle("active")
}

document.addEventListener('click', function (event) {
	if (!burgerCont.contains(event.target)) {
		dropMenu.classList.remove('active');
	}
})