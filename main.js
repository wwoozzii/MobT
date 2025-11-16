const bergerCont = document.querySelector('.burgerCont')
const burgerMenu = document.querySelector('.burgerMenu')
const dropMenu = document.querySelector('.dropMenu')
const ACTIVE_CLASS = 'active';
const VISIBLE_CLASS = 'visible';

burgerMenu.addEventListener("click", toggleMenu)

function toggleMenu() {
	dropMenu.classList.toggle("active")
}

