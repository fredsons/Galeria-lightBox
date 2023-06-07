// Selecionar os elementos da galeria e do lightbox
const galleryItens = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");

// Adicionar um evento de clique a cada item da galeria
galleryItens.forEach((item) => {
  item.addEventListener('click', () => {
    // Ativar o lightbox ao clicar em um item da galeria
    lightbox.classList.add('active');

    // Obter a URL da imagem do item da galeria
    const imageUrl = item.querySelector('.gallery-image').getAttribute('data-src');

    // Atualizar a imagem exibida no lightbox com a URL obtida
    lightboxImage.setAttribute('src', imageUrl);

    // Exibir o lightbox
    lightbox.style.display = "flex";
  });
});

// Adicionar um evento de clique ao botão de fechar do lightbox
lightboxClose.addEventListener('click', () => {
  // Desativar o lightbox ao clicar no botão de fechar
  lightbox.classList.remove('active');

  // Ocultar o lightbox
  lightbox.style.display = "none";
});
