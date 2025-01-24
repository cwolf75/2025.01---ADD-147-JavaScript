function changeImage(imageSrc) {
    mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc;
}

function changeTextFromExternalFile() {
    paragraph = document.getElementById('info');
    paragraph.textContent = 'This text was updated using an external script!';
}

function resizeImage(size) {
     mainImage = document.getElementById('mainImage');
    if (size === 'small') {
        mainImage.style.width = '150px';
    } else if (size === 'large') {
        mainImage.style.width = '1000px';
    }
}

function toggleImage(show) {
    const mainImage = document.getElementById('mainImage');
    mainImage.style.display = show ? 'block' : 'none';
}

function changeTextColor(color) {
    document.getElementById('info').style.color = color;
}