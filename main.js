// бургер меню
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



// редактор профиля
const copyProfile = document.querySelector('.copyProfile')
const editBtn = document.querySelector('.editBtn')

editBtn.addEventListener("click", toggleProfile)

function toggleProfile() {
	copyProfile.classList.toggle("active")
}

const closeBtn = document.querySelector('.close-btn');

document.addEventListener('click', function (event) {

	if (event.target.closest('.close-btn')) {
		copyProfile.classList.remove('active');
	}
})


// выбор файла для обложки
const coverInput = document.getElementById('coverInput')
const coverImage = document.querySelector('.copyHeadbg img')

function openCoverPicker() {
	if (coverInput) {
		coverInput.click()
	}
}

coverInput.addEventListener('change', function (event) {
	console.log('Файл выбран!')

	const file = event.target.files[0]
	if (file) {
		processCoverImage(file)
	}
})


function processCoverImage(file) {
	if (!file.type.startsWith('image/')) {
		alert('Пожалуйста, выберите изображение')
		return;
	}

	const reader = new FileReader()

	reader.onload = function (e) {
		coverImage.src = e.target.result
		console.log('Обложка обновлена!')
	}

	reader.readAsDataURL(file)
}

const coverLink = document.querySelector('.editHead a');
if (coverLink) {
	coverLink.addEventListener('click', function (event) {
		event.preventDefault();
		openCoverPicker();
	});
}



// выбор файла для аватарки
const photoInput = document.getElementById('photoInput')
const photoImage = document.querySelector('.copyAvatars img')

function openPhotoPicker() {
	if (photoInput) {
		photoInput.click()
	}
}

photoInput.addEventListener('change', function (event) {
	console.log('Файл выбран!')

	const file = event.target.files[0]
	if (file) {
		processAvatarImage(file)
	}
})


function processAvatarImage(file) {
	if (!file.type.startsWith('image/')) {
		alert('Пожалуйста, выберите изображение')
		return;
	}

	const reader = new FileReader()

	reader.onload = function (e) {
		photoImage.src = e.target.result
		console.log('Фото обновлено!')
	}

	reader.readAsDataURL(file)
}

const photoLink = document.querySelector('.editAvatar a');
if (photoLink) {
	photoLink.addEventListener('click', function (event) {
		event.preventDefault();
		openPhotoPicker();
	});
}