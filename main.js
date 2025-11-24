// Функции для работы с localStorage
function saveImagesToStorage() {
	const mainCover = document.querySelector('.headbg img');
	const mainAvatar = document.querySelector('.avatars img');

	if (mainCover) localStorage.setItem('userCover', mainCover.src);
	if (mainAvatar) localStorage.setItem('userAvatar', mainAvatar.src);

	console.log('Изображения сохранены в localStorage');
}

function loadImagesFromStorage() {
	const mainCover = document.querySelector('.headbg img');
	const mainAvatar = document.querySelector('.avatars img');
	const editCover = document.querySelector('.copyHeadbg img');
	const editAvatar = document.querySelector('.copyAvatars img');

	const savedCover = localStorage.getItem('userCover');
	const savedAvatar = localStorage.getItem('userAvatar');

	if (savedCover && mainCover) {
		mainCover.src = savedCover;
		if (editCover) editCover.src = savedCover;
		console.log('Обложка загружена из localStorage');
	}

	if (savedAvatar && mainAvatar) {
		mainAvatar.src = savedAvatar;
		if (editAvatar) editAvatar.src = savedAvatar;
		console.log('Аватарка загружена из localStorage');
	}


}

// Функция сброса изменений в редакторе
function resetEditorChanges() {
	const mainCover = document.querySelector('.headbg img');
	const mainAvatar = document.querySelector('.avatars img');
	const editCover = document.querySelector('.copyHeadbg img');
	const editAvatar = document.querySelector('.copyAvatars img');

	// Возвращаем оригинальные изображения в редактор
	if (mainCover && editCover) {
		editCover.src = mainCover.src;
	}
	if (mainAvatar && editAvatar) {
		editAvatar.src = mainAvatar.src;
	}

	console.log('Изменения в редакторе сброшены');
}

// Функция применения изменений (для кнопки ✅)
function applyChanges() {
	const mainCover = document.querySelector('.headbg img');
	const mainAvatar = document.querySelector('.avatars img');
	const editCover = document.querySelector('.copyHeadbg img');
	const editAvatar = document.querySelector('.copyAvatars img');

	// Копируем из редактора в основной профиль
	if (editCover && mainCover) {
		mainCover.src = editCover.src;
	}
	if (editAvatar && mainAvatar) {
		mainAvatar.src = editAvatar.src;
	}

	// Сохраняем в localStorage
	saveImagesToStorage();

	console.log('Изменения применены и сохранены');
	copyProfile.classList.remove('active');
	blurtest.classList.remove('active')
}

// Загрузка сохраненных изображений при старте
document.addEventListener('DOMContentLoaded', function () {
	loadImagesFromStorage();
});

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

const blurtest = document.querySelector('.blurtest')

function toggleProfile() {
	copyProfile.classList.toggle("active")
	blurtest.classList.toggle("active")
}



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

	const maxSize = 5 * 1024 * 1024; // 5MB
	if (file.size > maxSize) {
		alert('Файл слишком большой. Максимум 5MB');
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

	const maxSize = 5 * 1024 * 1024; // 5MB
	if (file.size > maxSize) {
		alert('Файл слишком большой. Максимум 5MB');
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

// Обработчик для кнопки сохранения ✅
const saveBtn = document.querySelector('.save-btn');
saveBtn.addEventListener('click', applyChanges);

// Обработчик для кнопки закрытия
const closeBtn = document.querySelector('.close-btn');

document.addEventListener('click', function (event) {
	if (event.target.closest('.close-btn')) {
		resetEditorChanges();
		copyProfile.classList.remove('active');
		blurtest.classList.remove('active')
		return;
	}
});












