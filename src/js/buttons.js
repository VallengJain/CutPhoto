const uploadButton = document.getElementById('uploadButton');
const imageInput = document.getElementById('imageInput');
const clearButton = document.getElementById('clearButton');
const uploadedImageWrapper = document.getElementById('uploadedImageWrapper');
const uploadedImage = document.getElementById('uploadedImage');
const cutButton = document.getElementById('cutButton')
const downloadButton = document.getElementById('downloadButton');

uploadButton.addEventListener('click', () => {
    imageInput.click();
});

imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (e) => {
            uploadedImageWrapper.style.display = 'block';
            const imageDataURL = e.target.result;
            uploadedImage.src = imageDataURL;
            uploadedImage.style.display = 'block';
            localStorage.setItem('uploadedImage', imageDataURL);

            clearButton.style.display = 'block';
            cutButton.style.display = 'block';
            downloadButton.style.display = 'block';

            localStorage.setItem('savedButtons', 'true');

            clearButton.addEventListener('click', () => {
                localStorage.clear();
                window.location.reload();
            });

            downloadButton.addEventListener('click', () => {
                downloadImage(imageDataURL, 'cutphoto-image.png');
            });
        };
        reader.readAsDataURL(file);
    } else alert('Нужно выбрать изображение.');
});

cutButton.addEventListener('click', () => {
    document.location.href = 'cutImage.html';
});

function downloadImage(dataURL, filename) {
    const tempURL = document.createElement('a');
    tempURL.href = dataURL;
    tempURL.download = filename;
    tempURL.click();
    tempURL.remove();
}

function saveUI() {
    const savedImage = localStorage.getItem('uploadedImage');
    const savedButtons = localStorage.getItem('savedButtons') === 'true';

    if (savedImage) {
        uploadedImage.src = savedImage;
        uploadedImage.style.display = 'block';
    } else {

    }
    if (savedButtons) {
        clearButton.style.display = 'block';
        cutButton.style.display = 'block';
        downloadButton.style.display = 'block';

        clearButton.addEventListener('click', () => {
            localStorage.clear();
            window.location.reload();
        });

        downloadButton.addEventListener('click', () => {
            downloadImage(savedImage, 'cutphoto-image.png');
        });
    }
}

window.addEventListener('DOMContentLoaded', saveUI);