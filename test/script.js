let currentImageIndex = 0;
const images = ["nail-polish.jpg", "nail-polish2.jpg"];
const productImg = document.getElementById("product-img");

function showImage(index) {
    productImg.src = images[index];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Modal
const modal = document.getElementById("modal");
const btn = document.getElementById("buy-now");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
