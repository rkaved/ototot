document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    const showImage = (index) => {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    };

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    };

    const prevImage = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    };

    document.querySelector('.next-button').addEventListener('click', nextImage);
    document.querySelector('.prev-button').addEventListener('click', prevImage);

    // Mostrar la primera imagen inicialmente
    showImage(currentIndex);
});
