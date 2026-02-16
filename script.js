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
