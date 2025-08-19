// Adicione este script ao final do seu HTML ou em um arquivo JS
document.querySelectorAll('.product-images img').forEach(img => {
  img.addEventListener('click', function() {
    // Cria o overlay
    const overlay = document.createElement('div');
    overlay.className = 'img-overlay';
    overlay.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;
    document.body.appendChild(overlay);

    // Fecha ao clicar no overlay
    overlay.addEventListener('click', function() {
      overlay.remove();
    });
  });
});