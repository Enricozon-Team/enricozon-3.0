let currentImageIndex = 0;
const images = ["image1.jpeg", "image2.jpeg", "image3.jpeg"];

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    document.getElementById("productImage").src = images[currentImageIndex];
}
