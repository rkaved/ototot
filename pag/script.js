// Carrusel de imágenes y videos
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-inner img, .carousel-inner video');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);

    // Función para añadir reseñas
    const submitReviewBtn = document.getElementById('submitReview');
    const commentInput = document.getElementById('commentInput');
    const commentList = document.getElementById('commentList');

    function addComment() {
        const commentText = commentInput.value.trim();
        if (commentText !== "") {
            const li = document.createElement('li');
            li.textContent = commentText;
            commentList.appendChild(li);
            commentInput.value = "";
        } else {
            alert("No puedes enviar una reseña vacía.");
        }
    }

    submitReviewBtn.addEventListener('click', addComment);
});


window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
