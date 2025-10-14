// script.js
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mainResponsiveNav = document.getElementById('mainResponsiveNav');

    if (hamburgerBtn && mainResponsiveNav) {
        hamburgerBtn.addEventListener('click', function () {
            mainResponsiveNav.classList.toggle('open');
            hamburgerBtn.classList.toggle('active'); // Para animar el ícono
            document.body.classList.toggle('no-scroll'); // Opcional: para evitar scroll en el body
        });

        // Opcional: Cerrar el menú al hacer clic fuera o en un enlace
        mainResponsiveNav.addEventListener('click', function (event) {
            if (event.target.tagName === 'A') { // Si se hizo clic en un enlace
                mainResponsiveNav.classList.remove('open');
                hamburgerBtn.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    }
});