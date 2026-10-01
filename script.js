const lightbox = document.querySelector('[data-lightbox]');
const openButtons = document.querySelectorAll('[data-lightbox-open]');
const closeButton = document.querySelector('[data-lightbox-close]');
const lightboxImage = document.querySelector('[data-lightbox-image]');

if (lightbox && openButtons.length) {
  openButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const src = button.dataset.menuSrc;
      const alt = button.dataset.menuAlt;
      if (lightboxImage && src) lightboxImage.src = src;
      if (lightboxImage && alt) lightboxImage.alt = alt;
      if (typeof lightbox.showModal === 'function') lightbox.showModal();
    });
  });
}

if (lightbox && closeButton) {
  closeButton.addEventListener('click', () => lightbox.close());
}

if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
}
