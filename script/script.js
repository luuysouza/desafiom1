const time = 3000;
let currentImageIndex = 0;
const images = document.querySelectorAll("#history-container img");
const max = images.length;

function nextImage() {
    images[currentImageIndex].classList.remove("showing");
    currentImageIndex++;

    if (currentImageIndex >= max) {
        currentImageIndex = 0;
    }

    images[currentImageIndex].classList.add("showing");
}

function start() {
    setInterval(() => {
        nextImage();
    }, time);
}

window.addEventListener("load", start);