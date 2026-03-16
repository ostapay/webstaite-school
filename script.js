document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-img');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    const lightboxImg = document.createElement('img');
    lightbox.appendChild(lightboxImg);

    galleryImages.forEach(image => {
        image.addEventListener('click', e => {
            lightbox.classList.add('active');
            lightboxImg.src = image.src;
        });
    });

    lightbox.addEventListener('click', e => {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove('active');
        }
    });
});
const btnNo = document.getElementById('btn-no');

btnNo.addEventListener('mouseover', () => {
    // Losujemy przesunięcie w zakresie -100px do 100px
    const x = Math.random() * 200 - 100; 
    const y = Math.random() * 200 - 100;

    btnNo.style.transform = `translate(${x}px, ${y}px)`;
});

// Opcjonalnie: reset pozycji po kliknięciu (jeśli komuś się uda)
btnNo.addEventListener('click', () => {
    alert('Błąd systemu! W New Tech Kraków wybieramy tylko sukces. Spróbuj kliknąć TAK! ;)');
});