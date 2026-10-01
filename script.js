const lightbox = document.querySelector('[data-lightbox]');
const openButton = document.querySelector('[data-lightbox-open]');
const closeButton = document.querySelector('[data-lightbox-close]');

if (lightbox && openButton) {
  openButton.addEventListener('click', () => {
    if (typeof lightbox.showModal === 'function') lightbox.showModal();
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
