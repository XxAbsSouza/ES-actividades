// Fechar o menu offcanvas ao clicar em qualquer link de navegação
document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', function () {
        // Obtém a referência ao menu offcanvas
        const offcanvas = document.getElementById('top-navbar');
        const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
        
        // Se o menu estiver aberto, fecha
        if (offcanvasInstance) {
            offcanvasInstance.hide();
        }
    });
});
