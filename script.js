const galleryItens = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector(".lightbox")
const lightboxImage = document.querySelector(".lightbox-image")
const lightboxClose = document.querySelector(".lightbox-close")

galleryItens.forEach((item) => {
  item.addEventListener('click', () => {
    lightbox.classList.add('active');
    const imageUrl = item.querySelector('.gallery-image').getAttribute('data-src')
    lightboxImage.setAttribute('src', imageUrl);
    lightbox.style.display = "flex"

  })
})

lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('active');
  lightbox.style.display = "none"
})