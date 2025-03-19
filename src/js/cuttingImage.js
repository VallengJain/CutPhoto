const uploadedImage = document.getElementById('uploadedImage');
const savedImage = localStorage.getItem('uploadedImage');
const savingButton = document.getElementById('savingButton');
const backButton = document.getElementById('backButton');

if (savedImage) {
    uploadedImage.src = savedImage;
    uploadedImage.style.display = 'block';
} else {
    alert("Изображение не было загружено!");
}

savingButton.addEventListener('click', () => {
    alert("Фото сохранено!")
    document.location.href = 'index.html';
});

backButton.addEventListener('click', () => {
    document.location.href = 'index.html';
});